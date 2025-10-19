require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    message: 'Backend is working!',
    users: users,
  })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});