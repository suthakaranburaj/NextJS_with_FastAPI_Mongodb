import { verifyToken } from './jwt'
import User from '../models/User'

export async function authenticateToken(req) {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      throw new Error('Access token required')
    }

    const decoded = verifyToken(token)
    const user = await User.findById(decoded.userId).select('-password')

    if (!user) {
      throw new Error('User not found')
    }

    if (!user.isActive) {
      throw new Error('User account is deactivated')
    }

    return user
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}

export function withAuth(handler) {
  return async (req, res) => {
    try {
      const user = await authenticateToken(req)
      req.user = user
      return handler(req, res)
    } catch (error) {
      return res.status(401).json({ 
        success: false, 
        message: error.message || 'Authentication failed' 
      })
    }
  }
} 