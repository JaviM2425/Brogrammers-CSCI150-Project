require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

/* ===========================
   TEST ROUTE
=========================== */
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

/* ===========================
   REGISTER
=========================== */
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, height, weight, stepGoal } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        height: height ? parseFloat(height) : null,
        weight: weight ? parseFloat(weight) : null,
        stepGoal: stepGoal ? parseInt(stepGoal, 10) : 10000,
      }
    });

    console.log('New user registered:', newUser.username);

    res.json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: newUser.userID,
        username: newUser.username,
        height: newUser.height,
        weight: newUser.weight,
        stepGoal: newUser.stepGoal,
      }
    });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* ===========================
   LOGIN
=========================== */
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Username and password are required' });

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user)
      return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: 'Invalid password' });

    console.log('User logged in:', user.username);

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.userID,
        username: user.username,
        height: user.height,
        weight: user.weight,
        stepGoal: user.stepGoal,
      }
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//--------------------Workout manger----------------------------------------------
app.post("/api/WorkoutLog", async (req, res) => {
    const { planName, exerciseName, sets, reps, weight, date, userID } = req.body;

    if (!exerciseName || !userID) {
        return res.status(400).json({ 
            error: "exerciseName and userID are required" 
        });
    }

    try {
        const workout = await prisma.workoutLog.create({
            data: {
                planName: planName || null,
                exerciseName,
                sets: sets ? Number(sets) : null,
                reps: reps ? Number(reps) : null,
                weight: weight ? Number(weight) : null,
                date: date ? new Date(date) : new Date(), 
                userID: userID
            }
        });

        res.status(201).json(workout);

    } catch (error) {
        console.error("Workout insert error:", error);
        res.status(500).json({ error: error.message });
    }
});

//------------------------workout recommdentation----------------------------------
app.post("/api/recommendations", async (req, res) => {
  const { planName, workoutType, description } = req.body;

  // basic validation
  if (!planName || !workoutType || !description) {
    return res.status(400).json({ 
      error: "planName, workoutType, and description are required" 
    });
  }

  try {
    const recommendation = await prisma.workoutRecommendation.create({
      data: {
        planName,
        workoutType,   
        description,
      }
    });

    res.status(201).json({
      success: true,
      message: "Workout recommendation saved!",
      data: recommendation
    });

  } catch (error) {
    console.error("Error saving recommendation:", error);
    res.status(500).json({ error: error.message });
  }
});

/* ===========================
   POST: LOG STEP RECORD
=========================== */
app.post("/api/steps/log", async (req, res) => {
  try {
    console.log("Incoming /api/steps/log:", req.body);

    const { userId, stepsCount, distance, calories, miles, caloriesBurned } = req.body;

    const newRecord = await prisma.stepRecord.create({
      data: {
        userID: userId,
        stepsCount,
        distance: distance ?? miles ?? null,
        calories: calories ?? caloriesBurned ?? null,
        date: new Date(),
      },
    });

    res.json({ success: true, record: newRecord });

  } catch (err) {
    console.error("Step logging error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ===========================
   PUT: UPDATE PROFILE (username/height/weight/stepGoal)
=========================== */
app.put("/api/user/profile", async (req, res) => {
  try {
    const { userId, height, weight, username, stepGoal } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);
    const existing = await prisma.user.findUnique({ where: { userID: id } });
    if (!existing) return res.status(404).json({ error: "User not found" });
    const data = {};
    if (username) data.username = username;
    if (height !== undefined) data.height = height === null ? null : parseFloat(height);
    if (weight !== undefined) data.weight = weight === null ? null : parseFloat(weight);
    if (stepGoal !== undefined) data.stepGoal = stepGoal === null ? null : parseInt(stepGoal, 10);

    if (data.username) {
      const exists = await prisma.user.findUnique({ where: { username: data.username } });
      if (exists && exists.userID !== id) {
        return res.status(409).json({ error: "Username already taken" });
      }
    }

    const updated = await prisma.user.update({
      where: { userID: id },
      data,
    });

    if (weight !== undefined && weight !== null && existing.weight !== parseFloat(weight)) {
      await prisma.weightLog.create({
        data: {
          userID: id,
          weight: parseFloat(weight),
          date: new Date(),
        },
      });
    }

    res.json({
      success: true,
      user: {
        id: updated.userID,
        username: updated.username,
        height: updated.height,
        weight: updated.weight,
        stepGoal: updated.stepGoal,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================
   PUT: UPDATE PASSWORD
=========================== */
app.put("/api/user/password", async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;
    if (!userId || !currentPassword || !newPassword) {
      return res.status(400).json({ error: "userId, currentPassword, and newPassword are required" });
    }

    const id = parseInt(userId, 10);
    const user = await prisma.user.findUnique({ where: { userID: id } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) return res.status(401).json({ error: "Current password is incorrect" });

    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { userID: id },
      data: { password: hashed },
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================
   GET: WEIGHT HISTORY
=========================== */
app.get("/api/weights/history", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);
    const weights = await prisma.weightLog.findMany({
      where: { userID: id },
      orderBy: { date: "asc" },
      take: 30,
    });

    res.json({ success: true, weights });
  } catch (error) {
    console.error("Error fetching weight history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================
   GET: WEEKLY STEPS/CALORIES
=========================== */
app.get("/api/steps/weekly", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);
    const today = new Date();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(today.getDate() - 6);

    const records = await prisma.stepRecord.findMany({
      where: {
        userID: id,
        date: { gte: start },
      },
      orderBy: { date: "asc" },
    });

    // Initialize last 7 days buckets
    const buckets = {};
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const key = d.toISOString().slice(0, 10);
      buckets[key] = { date: key, steps: 0, calories: 0 };
    }

    records.forEach((rec) => {
      const key = rec.date.toISOString().slice(0, 10);
      if (!buckets[key]) {
        buckets[key] = { date: key, steps: 0, calories: 0 };
      }
      buckets[key].steps = Math.max(buckets[key].steps, rec.stepsCount || 0);
      buckets[key].calories = Math.max(buckets[key].calories, rec.calories || 0);
    });

    const weekly = Object.values(buckets).sort((a, b) => (a.date > b.date ? 1 : -1));

    res.json({ success: true, weekly });
  } catch (error) {
    console.error("Error fetching weekly steps:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================
   GET: TODAY'S STEPS
=========================== */
app.get('/api/steps/today', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);

    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    // Fetch all records for today, oldest + newest
    const records = await prisma.stepRecord.findMany({
      where: {
        userID: id,
        date: { gte: start, lte: end },
      },
      orderBy: { date: "asc" }
    });

    if (!records.length) {
      return res.json({
        success: true,
        steps: 0,
        distance: 0,
        calories: 0,
      });
    }

    // Use latest record
    const latest = records[records.length - 1];

    res.json({
      success: true,
      steps: latest.stepsCount,
      distance: latest.distance || 0,
      calories: latest.calories || 0,
    });
  } catch (error) {
    console.error("Error fetching today's steps:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================
   START SERVER
=========================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
