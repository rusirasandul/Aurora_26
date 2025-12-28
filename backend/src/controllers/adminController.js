import User from '../models/User.js';

// @desc    Scan QR Code to Check In User
// @route   POST /api/admin/scan
// @access  Admin only (add auth middleware as needed)
export const markAttendance = async (req, res) => {
  const { code, adminName } = req.body;

  try {
    // Validate input
    if (!code) {
      return res.status(400).json({ 
        success: false, 
        message: 'QR code is required' 
      });
    }

    // Find the user by registration ID
    const user = await User.findOne({ registrationId: code });

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'Invalid QR Code - User not found' 
      });
    }

    // Check if already checked in
    if (user.isCheckedIn) {
      return res.status(400).json({ 
        success: false, 
        message: `⚠️ ALREADY SCANNED at ${new Date(user.checkInTime).toLocaleTimeString()}`,
        user: { 
          name: user.fullName, 
          university: user.university,
          checkInTime: user.checkInTime,
          checkedInBy: user.checkedInBy
        }
      });
    }

    // Mark as checked in (atomic update)
    user.isCheckedIn = true;
    user.checkInTime = new Date();
    user.checkedInBy = adminName || 'Admin';
    await user.save();

    res.json({ 
      success: true, 
      message: '✅ Access Granted', 
      user: { 
        name: user.fullName, 
        email: user.email,
        university: user.university,
        eventPhase: user.eventPhase,
        attendeeType: user.attendeeType,
        checkInTime: user.checkInTime
      }
    });

  } catch (error) {
    console.error('Check-in Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during check-in',
      error: error.message 
    });
  }
};

// @desc    Get all checked-in users
// @route   GET /api/admin/attendance
// @access  Admin only
export const getAttendance = async (req, res) => {
  try {
    const attendees = await User.find({ isCheckedIn: true })
      .select('fullName email university eventPhase checkInTime checkedInBy')
      .sort({ checkInTime: -1 });

    res.json({
      success: true,
      count: attendees.length,
      data: attendees
    });

  } catch (error) {
    console.error('Get Attendance Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching attendance',
      error: error.message 
    });
  }
};

// @desc    Get attendance statistics
// @route   GET /api/admin/stats
// @access  Admin only
export const getAttendanceStats = async (req, res) => {
  try {
    const totalRegistered = await User.countDocuments();
    const totalCheckedIn = await User.countDocuments({ isCheckedIn: true });
    const byPhase = await User.aggregate([
      { 
        $group: { 
          _id: '$eventPhase', 
          total: { $sum: 1 },
          checkedIn: { 
            $sum: { $cond: ['$isCheckedIn', 1, 0] } 
          }
        } 
      }
    ]);

    res.json({
      success: true,
      data: {
        totalRegistered,
        totalCheckedIn,
        notCheckedIn: totalRegistered - totalCheckedIn,
        checkInPercentage: totalRegistered > 0 
          ? ((totalCheckedIn / totalRegistered) * 100).toFixed(2) 
          : 0,
        byPhase
      }
    });

  } catch (error) {
    console.error('Get Stats Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching statistics',
      error: error.message 
    });
  }
};
