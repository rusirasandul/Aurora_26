# API Testing Guide - Aurora 2026

This document contains all test cases for the Aurora 2026 backend API.

## Prerequisites

1. Start the backend server:
```bash
cd backend
npm start
```

2. Seed the database with sample data:
```bash
npm run seed
```

---

## Authentication Tests

### Test 1: User Registration (Success)

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "fullName": "Test User",
  "email": "testuser@example.com",
  "phone": "0771111111",
  "password": "password123",
  "university": "University of Sri Jayewardenepura",
  "faculty": "Faculty of Applied Sciences",
  "yearOfStudy": "3rd Year",
  "eventPhase": "Phase 1",
  "attendeeType": "Student",
  "isCompetitionParticipant": true,
  "tshirtSize": "L"
}
```

**Expected Response (201):**
```json
{
  "success": true,
  "message": "Registration successful! Welcome to Aurora 2026.",
  "data": {
    "user": {
      "id": "...",
      "fullName": "Test User",
      "email": "testuser@example.com",
      "eventPhase": "Phase 1",
      "attendeeType": "Student",
      "registrationId": "AUR-XXXXXX"
    },
    "qrCode": "data:image/png;base64,...",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**What to Check:**
- ✅ Status code is 201
- ✅ `registrationId` is generated (format: AUR-XXXXXX)
- ✅ `qrCode` is a base64 image string
- ✅ JWT token is returned

---

### Test 2: User Registration (Duplicate Email)

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "fullName": "Another User",
  "email": "rusira@example.com",
  "phone": "0771234567",
  "password": "password123",
  "university": "University of Colombo",
  "eventPhase": "Phase 1",
  "attendeeType": "Student"
}
```

**Expected Response (400):**
```json
{
  "success": false,
  "message": "User with this email already registered"
}
```

**What to Check:**
- ✅ Status code is 400
- ✅ Error message indicates duplicate email

---

### Test 3: User Login (Success)

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "rusira@example.com",
  "password": "password123"
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "...",
      "fullName": "Rusira Sandul",
      "email": "rusira@example.com",
      "eventPhase": "Phase 1",
      "registrationId": "AUR-TEST01"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**What to Check:**
- ✅ Status code is 200
- ✅ JWT token is returned
- ✅ User data is correct

---

### Test 4: User Login (Invalid Credentials)

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "rusira@example.com",
  "password": "wrongpassword"
}
```

**Expected Response (401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

**What to Check:**
- ✅ Status code is 401
- ✅ Error message indicates invalid credentials

---

## Admin Check-in Tests

### Test 5: Scan QR Code (First Time - Success)

**Endpoint:** `POST /api/admin/scan`

**Request Body:**
```json
{
  "code": "AUR-TEST01",
  "adminName": "Test Admin"
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "✅ Access Granted",
  "user": {
    "name": "Rusira Sandul",
    "email": "rusira@example.com",
    "university": "University of Sri Jayewardenepura",
    "eventPhase": "Phase 1",
    "attendeeType": "Student",
    "checkInTime": "2025-12-26T12:00:00.000Z"
  }
}
```

**What to Check:**
- ✅ Status code is 200
- ✅ Success message is displayed
- ✅ User details are returned
- ✅ Check-in time is set

---

### Test 6: Scan QR Code (Already Checked In)

**Endpoint:** `POST /api/admin/scan`

**Request Body:**
```json
{
  "code": "AUR-TEST03",
  "adminName": "Test Admin"
}
```

**Expected Response (400):**
```json
{
  "success": false,
  "message": "⚠️ ALREADY SCANNED at 9:30:00 AM",
  "user": {
    "name": "Kavindu Perera",
    "university": "University of Moratuwa",
    "checkInTime": "2025-12-26T09:30:00.000Z",
    "checkedInBy": "Admin Test"
  }
}
```

**What to Check:**
- ✅ Status code is 400
- ✅ Warning message is displayed
- ✅ Previous check-in details are shown

---

### Test 7: Scan QR Code (Invalid Code)

**Endpoint:** `POST /api/admin/scan`

**Request Body:**
```json
{
  "code": "AUR-INVALID",
  "adminName": "Test Admin"
}
```

**Expected Response (404):**
```json
{
  "success": false,
  "message": "Invalid QR Code - User not found"
}
```

**What to Check:**
- ✅ Status code is 404
- ✅ Error message indicates invalid code

---

### Test 8: Get All Checked-In Users

**Endpoint:** `GET /api/admin/attendance`

**Expected Response (200):**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "_id": "...",
      "fullName": "Kavindu Perera",
      "email": "kavindu@example.com",
      "university": "University of Moratuwa",
      "eventPhase": "Phase 3",
      "checkInTime": "2025-12-26T09:30:00.000Z",
      "checkedInBy": "Admin Test"
    },
    ...
  ]
}
```

**What to Check:**
- ✅ Status code is 200
- ✅ Count matches number of checked-in users
- ✅ Data is sorted by check-in time (most recent first)

---

### Test 9: Get Attendance Statistics

**Endpoint:** `GET /api/admin/stats`

**Expected Response (200):**
```json
{
  "success": true,
  "data": {
    "totalRegistered": 10,
    "totalCheckedIn": 4,
    "notCheckedIn": 6,
    "checkInPercentage": "40.00",
    "byPhase": [
      {
        "_id": "Phase 1",
        "total": 3,
        "checkedIn": 1
      },
      {
        "_id": "Phase 2",
        "total": 3,
        "checkedIn": 1
      },
      ...
    ]
  }
}
```

**What to Check:**
- ✅ Status code is 200
- ✅ Statistics are accurate
- ✅ Percentage is calculated correctly
- ✅ Phase breakdown is provided

---

## Health Check Test

### Test 10: API Health Check

**Endpoint:** `GET /api/health`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Aurora 2026 API is running!",
  "timestamp": "2025-12-26T12:00:00.000Z"
}
```

**What to Check:**
- ✅ Status code is 200
- ✅ Server is running
- ✅ Timestamp is current

---

## Testing with Postman

1. Import this collection: Create a new collection in Postman
2. Add all endpoints above as requests
3. Set base URL as variable: `{{baseURL}}` = `http://localhost:5000`
4. For authenticated routes, add token to Authorization header:
   - Type: Bearer Token
   - Token: (paste JWT from login response)

---

## Testing with cURL

### Register User
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

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "rusira@example.com",
    "password": "password123"
  }'
```

### Scan QR Code
```bash
curl -X POST http://localhost:5000/api/admin/scan \
  -H "Content-Type: application/json" \
  -d '{
    "code": "AUR-TEST01",
    "adminName": "Test Admin"
  }'
```

### Get Attendance
```bash
curl -X GET http://localhost:5000/api/admin/attendance
```

### Get Stats
```bash
curl -X GET http://localhost:5000/api/admin/stats
```

---

## Sample Test Data

Use these pre-seeded accounts for testing:

| Email | Password | Registration ID | Checked In |
|-------|----------|----------------|------------|
| rusira@example.com | password123 | AUR-TEST01 | No |
| oshini@example.com | password123 | AUR-TEST02 | No |
| kavindu@example.com | password123 | AUR-TEST03 | Yes |
| nimali@example.com | password123 | AUR-TEST04 | No |
| shenal@example.com | password123 | AUR-TEST05 | Yes |

---

## Automated Testing Checklist

- [ ] All registration validations work
- [ ] Duplicate email prevention works
- [ ] QR codes are generated correctly
- [ ] Login authentication works
- [ ] Invalid credentials are rejected
- [ ] QR scanning marks attendance
- [ ] Double-scanning is prevented
- [ ] Invalid QR codes are rejected
- [ ] Attendance list is accurate
- [ ] Statistics are calculated correctly
- [ ] Multiple admins can scan simultaneously

---

## Notes

- All passwords in sample data are: `password123`
- Registration IDs follow pattern: `AUR-XXXXXX`
- QR codes are Base64 encoded images
- Check-in time is stored in UTC
- All timestamps are ISO 8601 format
