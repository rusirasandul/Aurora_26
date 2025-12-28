import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import QRCode from 'qrcode';
import { nanoid } from 'nanoid';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const {
      fullName,
      email,
      phone,
      password,
      university,
      faculty,
      yearOfStudy,
      eventPhase,
      attendeeType,
      isCompetitionParticipant,
      dietaryRestrictions,
      tshirtSize
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'User with this email already registered' 
      });
    }

    // Generate Unique Registration ID (e.g., "AUR-X7Y2K9")
    const uniqueId = `AUR-${nanoid(6).toUpperCase()}`;

    // Generate QR Code containing the unique ID
    const qrCodeData = await QRCode.toDataURL(uniqueId);

    // Create new user
    const user = await User.create({
      fullName,
      email,
      phone,
      password,
      university,
      faculty,
      yearOfStudy,
      eventPhase,
      attendeeType,
      isCompetitionParticipant,
      dietaryRestrictions,
      tshirtSize,
      registrationId: uniqueId,
      qrCode: qrCodeData,
    });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'Registration successful! Welcome to Aurora 2026.',
      data: {
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          eventPhase: user.eventPhase,
          attendeeType: user.attendeeType,
          registrationId: user.registrationId,
        },
        qrCode: user.qrCode,
        token,
      },
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration',
      error: error.message 
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide email and password' 
      });
    }

    // Find user (include password for comparison)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful!',
      data: {
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          eventPhase: user.eventPhase,
          attendeeType: user.attendeeType,
        },
        token,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login',
      error: error.message 
    });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private (requires authentication)
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error('Profile Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};
