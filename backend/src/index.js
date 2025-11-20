require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('./generated/prisma');
const { parse } = require('dotenv');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' })
});

// Register route
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

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
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




// Start the server (http://localhost:5000/api/test)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});