# MongoDB Connection Issues - Solutions

## Problem
`querySrv ENOTFOUND _mongodb._tcp.aurora.clv0g33.mongodb.net`

This means your computer cannot reach MongoDB Atlas. Possible causes:
- Network/firewall blocking access
- VPN or corporate network restrictions
- DNS resolution issues
- MongoDB Atlas cluster paused or deleted

---

## Solution 1: Use Local MongoDB (Recommended for Testing)

### Install MongoDB Community Edition

**Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Install MongoDB Compass (GUI tool included)
3. MongoDB will run on `mongodb://localhost:27017`

**Quick Install (Windows):**
```powershell
# Using Chocolatey
choco install mongodb

# Or using winget
winget install MongoDB.Server
```

### Update .env File
```env
MONGODB_URI=mongodb://localhost:27017/aurora2026
```

### Start MongoDB
```powershell
# Start MongoDB service
net start MongoDB
```

### Run Seed Script
```bash
npm run seed
```

---

## Solution 2: Fix MongoDB Atlas Connection

### Step 1: Check MongoDB Atlas
1. Go to https://cloud.mongodb.com
2. Check if cluster is running (not paused)
3. Verify cluster name is correct: `aurora.clv0g33.mongodb.net`

### Step 2: Whitelist Your IP
1. In MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Add `0.0.0.0/0` (allows all IPs - for testing only)
4. Wait 2-3 minutes for changes to apply

### Step 3: Test Connection String
Replace in `.env`:
```env
# Try standard connection string (not SRV)
MONGODB_URI=mongodb://auroraconference2026_db_user:Aurora%402026Admin@aurora-shard-00-00.clv0g33.mongodb.net:27017,aurora-shard-00-01.clv0g33.mongodb.net:27017,aurora-shard-00-02.clv0g33.mongodb.net:27017/aurora2026?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority
```

(Get the exact connection string from Atlas → Connect → Drivers)

---

## Solution 3: Test Network Connectivity

```powershell
# Test if you can reach MongoDB Atlas
nslookup aurora.clv0g33.mongodb.net

# Ping test
ping aurora.clv0g33.mongodb.net
```

If these fail, your network is blocking MongoDB Atlas.

---

## Solution 4: Use Docker MongoDB (Alternative)

```bash
# Run MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Update .env
MONGODB_URI=mongodb://localhost:27017/aurora2026

# Run seed
npm run seed
```

---

## Quick Fix for Immediate Testing

Copy `.env.local` to `.env`:

```powershell
cp .env.local .env
```

Then install and start local MongoDB:

```powershell
# Install MongoDB
winget install MongoDB.Server

# Start service
net start MongoDB

# Run seed
npm run seed
```

---

## Check Connection

Run this test script:

```javascript
// test-connection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });
```

Run: `node test-connection.js`

---

## Recommendation

**For development/testing:** Use local MongoDB
**For production:** Use MongoDB Atlas with proper network configuration
