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

/* ===========================
   POST: LOG A STEP RECORD
=========================== */
app.post("/api/steps/log", async (req, res) => {
  try {
    console.log("Incoming /api/steps/log:", req.body);

    const { userId, stepsCount, distance, calories } = req.body;

    const newRecord = await prisma.stepRecord.create({
      data: {
        userID: userId,
        stepsCount,
        distance,
        calories,
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
   GET: TODAY’S STEP SUMMARY
=========================== */
app.get('/api/steps/today', async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId)
      return res.status(400).json({ error: "userId is required" });

    const id = parseInt(userId, 10);

    // Start of today
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    // Fetch ALL records for today
    const records = await prisma.stepRecord.findMany({
      where: {
        userID: id,
        date: { gte: start, lte: end },
      },
      orderBy: { date: "asc" }
    });

    // Sum all values for the day
    const dailySummary = records.reduce(
      (acc, r) => {
        acc.steps += r.stepsCount;
        acc.distance += r.distance || 0;
        acc.calories += r.calories || 0;
        return acc;
      },
      { steps: 0, distance: 0, calories: 0 }
    );

    res.json({
      success: true,
      ...dailySummary
    });

  } catch (error) {
    console.error("Error fetching today’s steps:", error);
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