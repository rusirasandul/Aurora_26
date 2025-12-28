import express from 'express';
import { 
  markAttendance, 
  getAttendance, 
  getAttendanceStats 
} from '../controllers/adminController.js';

const router = express.Router();

// @route   POST /api/admin/scan
// @desc    Scan QR code and mark user as checked in
// @access  Admin (add auth middleware as needed)
router.post('/scan', markAttendance);

// @route   GET /api/admin/attendance
// @desc    Get all checked-in users
// @access  Admin
router.get('/attendance', getAttendance);

// @route   GET /api/admin/stats
// @desc    Get attendance statistics
// @access  Admin
router.get('/stats', getAttendanceStats);

export default router;
