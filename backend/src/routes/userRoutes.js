import express from 'express'
import { registerUser, loginUser } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', (req, res) => {
  return res.json({ message: 'Testing route' })
}
)

export default router