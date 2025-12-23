import express from 'express';
import { body } from 'express-validator';
import { 
  registerUser, 
  loginUser, 
  getUserProfile 
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Validation rules for registration
const registerValidation = [
  body('fullName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Full name must be at least 2 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('phone')
    .matches(/^[0-9]{10}$/)
    .withMessage('Please provide a valid 10-digit phone number'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('university')
    .trim()
    .notEmpty()
    .withMessage('University name is required'),
  body('eventPhase')
    .isIn(['Phase 1', 'Phase 2', 'Phase 3', 'Grand Finale'])
    .withMessage('Invalid event phase'),
];

// Routes
router.post('/register', registerValidation, registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

export default router;
