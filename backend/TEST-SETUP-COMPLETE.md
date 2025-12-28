# Aurora 2026 Backend - Testing Setup Complete! 🎉

## What's Been Created

### 1. Sample Database (10 Users)
**Location:** `backend/src/data/sampleUsers.json`

Pre-configured test users with:
- Various universities and event phases
- 4 users already checked in
- 6 users ready to test check-in
- All using password: `password123`

### 2. Database Seed Script
**Location:** `backend/src/data/seed.js`

**Usage:**
```bash
npm run seed
```

This will:
- Clear existing data
- Insert 10 sample users
- Generate QR codes for each user
- Display statistics

### 3. Complete Test Documentation
**Location:** `backend/TESTING.md`

Includes:
- 10 detailed test cases
- Expected request/response examples
- cURL commands for each endpoint
- Sample test data table

### 4. Quick Test Guide
**Location:** `backend/QUICKTEST.md`

Quick reference for:
- Step-by-step testing
- Common commands
- Testing checklist

### 5. Postman Collection
**Location:** `backend/aurora-2026-postman-collection.json`

**To Import:**
1. Open Postman
2. Click Import
3. Select the JSON file
4. Collection with 9 pre-configured requests ready to test

---

## Quick Start Testing

### Step 1: Seed the Database
```bash
cd backend
npm run seed
```

**Expected Output:**
```
✅ Database seeded successfully!
📊 Inserted 10 users
📋 Sample Users:
1. Rusira Sandul (rusira@example.com) - AUR-TEST01
2. Oshini Amarasekara (oshini@example.com) - AUR-TEST02
...

📈 Statistics:
✓ Checked In: 4
○ Not Checked In: 6
```

### Step 2: Test Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "0771234567",
    "password": "password123",
    "university": "Test University",
    "eventPhase": "Phase 1",
    "attendeeType": "Student"
  }'
```

### Step 3: Test QR Scanning
```bash
curl -X POST http://localhost:5000/api/admin/scan \
  -H "Content-Type: application/json" \
  -d '{
    "code": "AUR-TEST01",
    "adminName": "Test Admin"
  }'
```

### Step 4: View Statistics
```bash
curl -X GET http://localhost:5000/api/admin/stats
```

---

## Test Accounts

| Name | Email | Password | Registration ID | Status |
|------|-------|----------|----------------|--------|
| Rusira Sandul | rusira@example.com | password123 | AUR-TEST01 | Not Checked In |
| Oshini Amarasekara | oshini@example.com | password123 | AUR-TEST02 | Not Checked In |
| Kavindu Perera | kavindu@example.com | password123 | AUR-TEST03 | ✅ Checked In |
| Nimali Silva | nimali@example.com | password123 | AUR-TEST04 | Not Checked In |
| Shenal Dissanayake | shenal@example.com | password123 | AUR-TEST05 | ✅ Checked In |
| Amaya Kumari | amaya@example.com | password123 | AUR-TEST06 | Not Checked In |
| Isuru Madushanka | isuru@example.com | password123 | AUR-TEST07 | ✅ Checked In |
| Dilshan Jayasinghe | dilshan@example.com | password123 | AUR-TEST08 | Not Checked In |
| Avishka Tharanga | avishka@example.com | password123 | AUR-TEST09 | Not Checked In |
| Praveen Lakshan | praveen@example.com | password123 | AUR-TEST10 | ✅ Checked In |

---

## Test Scenarios

### ✅ Registration Tests
1. Register new user → Success
2. Register duplicate email → Error
3. Login with valid credentials → Success
4. Login with invalid credentials → Error

### ✅ QR Scanning Tests
1. Scan valid QR (first time) → Access Granted
2. Scan valid QR (second time) → Already Scanned
3. Scan invalid QR → Not Found

### ✅ Admin Dashboard Tests
1. Get all checked-in users → Returns 4 users
2. Get statistics → Shows correct percentages
3. Get attendance by phase → Grouped data

---

## Files Created

```
backend/
├── src/
│   ├── data/
│   │   ├── sampleUsers.json    ← 10 sample users
│   │   └── seed.js              ← Seed script
│   ├── controllers/
│   │   ├── authController.js    ← Updated with QR
│   │   └── adminController.js   ← Check-in logic
│   └── routes/
│       └── adminRoutes.js       ← Admin endpoints
├── TESTING.md                   ← Complete test guide
├── QUICKTEST.md                 ← Quick reference
└── aurora-2026-postman-collection.json ← Postman tests
```

---

## Next Steps

1. **Run the seed script**
   ```bash
   npm run seed
   ```

2. **Start testing with Postman**
   - Import the collection
   - Run requests in order

3. **Or test with cURL**
   - Copy commands from TESTING.md
   - Run in terminal

4. **Check the documentation**
   - TESTING.md for detailed tests
   - QUICKTEST.md for quick commands

---

## Support

All test cases are documented with:
- ✅ Expected responses
- ✅ Status codes
- ✅ Sample data
- ✅ Error scenarios

Happy Testing! 🚀
