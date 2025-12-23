import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, 'Team name is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Team name must be at least 3 characters'],
    maxlength: [50, 'Team name cannot exceed 50 characters'],
  },
  
  // Team Leader
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  // Team Members (Including Leader)
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  
  // Competition Details
  competition: {
    type: String,
    enum: ['Mind Heist Challenge', 'AI Quiz', 'Social Engineering CTF'],
    default: 'Mind Heist Challenge',
  },
  
  // Team Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'disqualified'],
    default: 'pending',
  },
  
  // Registration
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  
  // Team Size Validation (Max 4 members for most competitions)
  maxMembers: {
    type: Number,
    default: 4,
  },
  
  // Additional Info
  institution: {
    type: String,
    required: true,
  },
  
  contactEmail: {
    type: String,
    required: true,
  },
  
  // Scores (To be updated during competition)
  score: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Validate team size before saving
teamSchema.pre('save', function(next) {
  if (this.members.length > this.maxMembers) {
    return next(new Error(`Team cannot have more than ${this.maxMembers} members`));
  }
  next();
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
