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

// Start the server (http://localhost:5000/api/test)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});