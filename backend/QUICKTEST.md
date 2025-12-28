# Quick Test Script for Aurora 2026 API

## Step 1: Seed Database

Run this command to populate the database with sample users:

```bash
npm run seed
```

This will create 10 sample users with the following data:
- 4 users already checked in
- 6 users not checked in
- Various universities and event phases
- All passwords are: `password123`

---

## Step 2: Test Registration

**Test New User Registration:**

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "New Test User",
    "email": "newuser@example.com",
    "phone": "0771111111",
    "password": "password123",
    "university": "Test University",
    "eventPhase": "Phase 1",
    "attendeeType": "Student"
  }'
```

**Expected:** Registration ID (AUR-XXXXXX) and QR code returned

---

## Step 3: Test Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "rusira@example.com",
    "password": "password123"
  }'
```

**Expected:** JWT token and user data returned

---

## Step 4: Test QR Scanning

**Scan a user who hasn't checked in yet:**

```bash
curl -X POST http://localhost:5000/api/admin/scan \
  -H "Content-Type: application/json" \
  -d '{
    "code": "AUR-TEST01",
    "adminName": "Test Admin"
  }'
```

**Expected:** "✅ Access Granted" message

**Try scanning the same user again:**

```bash
curl -X POST http://localhost:5000/api/admin/scan \
  -H "Content-Type: application/json" \
  -d '{
    "code": "AUR-TEST01",
    "adminName": "Test Admin"
  }'
```

**Expected:** "⚠️ ALREADY SCANNED" message

---

## Step 5: View Attendance

**Get all checked-in users:**

```bash
curl -X GET http://localhost:5000/api/admin/attendance
```

**Get attendance statistics:**

```bash
curl -X GET http://localhost:5000/api/admin/stats
```

---

## Quick Postman Collection

**Base URL:** `http://localhost:5000`

### Requests to Add:

1. **Register** - POST `/api/auth/register`
   - Body: JSON (see example in TESTING.md)

2. **Login** - POST `/api/auth/login`
   - Body: `{"email": "rusira@example.com", "password": "password123"}`

3. **Scan QR** - POST `/api/admin/scan`
   - Body: `{"code": "AUR-TEST01", "adminName": "Admin"}`

4. **Get Attendance** - GET `/api/admin/attendance`

5. **Get Stats** - GET `/api/admin/stats`

6. **Health Check** - GET `/api/health`

---

## Sample Users for Testing

| Name | Email | Registration ID | Checked In? |
|------|-------|----------------|-------------|
| Rusira Sandul | rusira@example.com | AUR-TEST01 | ❌ |
| Oshini Amarasekara | oshini@example.com | AUR-TEST02 | ❌ |
| Kavindu Perera | kavindu@example.com | AUR-TEST03 | ✅ |
| Nimali Silva | nimali@example.com | AUR-TEST04 | ❌ |
| Shenal Dissanayake | shenal@example.com | AUR-TEST05 | ✅ |

All passwords: `password123`

---

## Testing Checklist

- [x] Database seeded successfully
- [ ] New user can register
- [ ] Duplicate email is rejected
- [ ] User can login
- [ ] Invalid credentials are rejected
- [ ] QR code scan marks attendance
- [ ] Duplicate scan is prevented
- [ ] Invalid QR code is rejected
- [ ] Attendance list shows correct users
- [ ] Statistics are accurate

---

## Common Issues

**Issue:** "Cannot connect to MongoDB"
**Fix:** Check your `.env` file has correct `MONGODB_URI`

**Issue:** "Duplicate key error"
**Fix:** Run `npm run seed` again to reset database

**Issue:** "QR code not displaying"
**Fix:** Ensure the QR code is a valid base64 string starting with `data:image/png;base64,`
