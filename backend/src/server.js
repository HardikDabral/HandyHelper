import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: dirname(__dirname) + '/.env' })
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

// Update CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend-domain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))