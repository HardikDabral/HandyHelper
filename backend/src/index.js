import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

// Configure CORS for Vercel
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

// Basic route for Vercel health check
app.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})

app.use('/api/users', userRoutes)

export default app;
