import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import connectDB from '../config/db.js';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Sample users data
const sampleUsers = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'sampleUsers.json'), 'utf-8')
);

// Function to seed database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Clear existing users (optional - comment out if you want to keep existing data)
    console.log('🗑️  Clearing existing users...');
    await User.deleteMany({});

    // Generate QR codes for each user
    console.log('🎨 Generating QR codes...');
    const usersWithQR = await Promise.all(
      sampleUsers.map(async (userData) => {
        const qrCodeData = await QRCode.toDataURL(userData.registrationId);
        return {
          ...userData,
          qrCode: qrCodeData,
        };
      })
    );

    // Insert sample users
    console.log('📝 Inserting sample users...');
    const users = await User.insertMany(usersWithQR);

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Inserted ${users.length} users`);
    console.log('\n📋 Sample Users:');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.fullName} (${user.email}) - ${user.registrationId}`);
    });

    // Display statistics
    console.log('\n📈 Statistics:');
    const checkedInCount = users.filter(u => u.isCheckedIn).length;
    console.log(`✓ Checked In: ${checkedInCount}`);
    console.log(`○ Not Checked In: ${users.length - checkedInCount}`);

    console.log('\n🎯 Test Credentials:');
    console.log('Email: rusira@example.com');
    console.log('Password: password123');
    console.log('\n💡 All users use password: password123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
