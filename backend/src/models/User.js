import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  // Personal Information
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number'],
  },
  university: {
    type: String,
    required: [true, 'University name is required'],
    trim: true,
  },
  faculty: {
    type: String,
    trim: true,
  },
  yearOfStudy: {
    type: String,
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Other'],
  },
  
  // Registration Details
  eventPhase: {
    type: String,
    enum: ['Phase 1', 'Phase 2', 'Phase 3', 'Grand Finale'],
    required: true,
  },
  attendeeType: {
    type: String,
    enum: ['Student', 'Professional', 'Speaker'],
    default: 'Student',
  },
  
  // Attendance & QR System
  registrationId: {
    type: String,
    unique: true,
    sparse: true, // Allow null values while maintaining uniqueness
  },
  qrCode: {
    type: String, // Base64 QR code image
  },
  isCheckedIn: {
    type: Boolean,
    default: false,
  },
  checkInTime: {
    type: Date,
  },
  checkedInBy: {
    type: String, // Admin name who scanned
  },
  
  // Competition Registration (Optional)
  isCompetitionParticipant: {
    type: Boolean,
    default: false,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    default: null,
  },
  
  // Payment & Status
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  
  // Additional Fields
  dietaryRestrictions: {
    type: String,
    trim: true,
  },
  tshirtSize: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  
  // Security
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // Don't return password by default
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
