# Aurora 2026 Backend API

Backend server for Aurora 2026 Conference registration and management.

## Features

- ✅ User registration and authentication
- ✅ JWT-based authorization
- ✅ MongoDB database integration
- ✅ Team registration for competitions
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` folder:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
MONGODB_URI=mongodb://localhost:27017/aurora2026
PORT=5000
JWT_SECRET=your-secret-key-here
FRONTEND_URL=http://localhost:5173
```

### 3. Install MongoDB

**Option A: Local MongoDB**
- Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will start at `http://localhost:5000`

## API Endpoints

### Authentication

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "0771234567",
  "password": "password123",
  "university": "University of Colombo",
  "faculty": "Computing",
  "yearOfStudy": "3rd Year",
  "eventPhase": "Phase 2",
  "attendeeType": "Student",
  "isCompetitionParticipant": false,
  "tshirtSize": "L"
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Profile
```
GET /api/auth/profile
Authorization: Bearer YOUR_JWT_TOKEN
```

### Health Check
```
GET /api/health
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── authController.js  # Authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Team.js            # Team schema
│   ├── routes/
│   │   └── authRoutes.js      # API routes
│   └── index.js               # Entry point
├── .env                       # Environment variables (create this)
├── .env.example               # Example env file
├── .gitignore
├── package.json
└── README.md
```

## Testing with Postman/Thunder Client

1. **Register a new user:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body: See registration example above

2. **Login:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/login`
   - Body: email and password

3. **Access protected route:**
   - Method: GET
   - URL: `http://localhost:5000/api/auth/profile`
   - Headers: `Authorization: Bearer YOUR_TOKEN`

## Security Notes

- Never commit `.env` file to git
- Use strong JWT secret in production
- Change default passwords
- Enable HTTPS in production
- Implement rate limiting for production

## Next Steps

- [ ] Add team registration endpoints
- [ ] Implement email verification
- [ ] Add payment integration
- [ ] Create admin dashboard routes
- [ ] Add file upload for profile pictures

## Support

For issues or questions, contact: rusira@aurora2026.lk
