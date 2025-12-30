// connect_mongo_standard.js

// Import mongoose
// Note: Ensure you have mongoose installed: npm install mongoose
const mongoose = require('mongoose');

// --- CONFIGURATION ---

// REPLACE these with your actual details
const USERNAME = 'your_username';
const PASSWORD = encodeURIComponent('your_password'); // URL encode password to handle special characters
const CLUSTER_URL = 'aurora.clv0g33.mongodb.net'; // From your error message
const DB_NAME = 'myDatabase';

// To get the Standard Connection String in Atlas:
// 1. Click "Connect" -> "Connect your application".
// 2. Select driver "Node.js".
// 3. Select Version "2.2.12 or later" (This is crucial, older versions provide the mongodb:// format which we want).
//    Modern Atlas UI defaults to SRV (mongodb+srv://). You might need to look for "I am using an older driver"
//    or manually construct the string if the UI only shows SRV.
//
// A Standard Connection String looks like:
// mongodb://<host1>:<port>,<host2>:<port>,<host3>:<port>/?ssl=true&replicaSet=atlas-<id>-shard-0&authSource=admin&retryWrites=true&w=majority

// Example of constructing it manually if you know your shard hosts.
// The error `_mongodb._tcp.aurora.clv0g33.mongodb.net` implies your cluster is `aurora`.
// Usually, the shards follow a pattern like:
// aurora-shard-00-00.clv0g33.mongodb.net:27017
// aurora-shard-00-01.clv0g33.mongodb.net:27017
// aurora-shard-00-02.clv0g33.mongodb.net:27017
//
// IMPORTANT: You must verify the exact hostnames in your Atlas dashboard or by resolving the SRV record manually elsewhere (e.g. `nslookup -type=SRV _mongodb._tcp.aurora.clv0g33.mongodb.net`).
//
// For this example, I will use placeholders. You must replace them with your actual shard addresses.

const connectionString = `mongodb://${USERNAME}:${PASSWORD}@aurora-shard-00-00.clv0g33.mongodb.net:27017,aurora-shard-00-01.clv0g33.mongodb.net:27017,aurora-shard-00-02.clv0g33.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-shard-0&authSource=admin&retryWrites=true&w=majority`;

// --- CONNECTION LOGIC ---

async function connectDB() {
  try {
    console.log('Attempting to connect to MongoDB using Standard Connection String...');

    // Mongoose connection options (optional in Mongoose 6+, but good for clarity)
    const options = {
      // useNewUrlParser: true, // Deprecated in newer Mongoose
      // useUnifiedTopology: true, // Deprecated in newer Mongoose
      serverSelectionTimeoutMS: 5000, // Fail fast if can't connect
    };

    await mongoose.connect(connectionString, options);

    console.log('✅ MongoDB Connected Successfully!');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);

    if (err.message.includes('ENOTFOUND')) {
      console.error('   -> Still getting DNS errors? Check your hostnames.');
    } else if (err.message.includes('Authentication failed')) {
      console.error('   -> Check your username and password.');
    } else if (err.message.includes('time')) {
      console.error('   -> Connection timed out. Check your IP Whitelist on Atlas.');
    }

    process.exit(1);
  }
}

// Run the connection
if (require.main === module) {
  connectDB();
}

module.exports = connectDB;
