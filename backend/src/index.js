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
    const { username, password, height, weight } = req.body;

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

    // Validation for required fields
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
                date: date ? new Date(date) : new Date(), // REQUIRED by Prisma
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
        workoutType,   // Prisma expects an array: ["Push", "Pull"]
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
   PUT: UPDATE HEIGHT/WEIGHT
=========================== */
app.put("/api/user/profile", async (req, res) => {
  try {
    const { userId, height, weight } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);
    const data = {};
    if (height !== undefined) data.height = height === null ? null : parseFloat(height);
    if (weight !== undefined) data.weight = weight === null ? null : parseFloat(weight);

    const updated = await prisma.user.update({
      where: { userID: id },
      data,
    });

    res.json({
      success: true,
      user: {
        id: updated.userID,
        username: updated.username,
        height: updated.height,
        weight: updated.weight,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
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
