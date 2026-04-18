🌐 Frontend–Backend Communication & Proxy Setup
📌 Problem: CORS Issue

In our application:

Frontend runs on → http://localhost:5173 (via Vite)
Backend runs on → http://localhost:3000 (Node.js + Express)

When the frontend tries to send a request:

POST http://localhost:3000/api/auth/register

👉 The browser blocks it due to CORS (Cross-Origin Resource Sharing).

❌ Why This Happens?

Browsers do not allow requests between different origins:

Different port = Different origin

So:

5173 → frontend
3000 → backend

➡️ This triggers a CORS policy error

🚀 Solution: Proxy Using Vite

Instead of calling backend directly, we use a proxy server.

🔧 Vite Configuration

Update vite.config.js:

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}
🔄 How Proxy Works
📊 Request Flow

Browser sends request to:

http://localhost:5173/api/auth/register
Vite intercepts request (/api)

Vite forwards request to:

http://localhost:3000/api/auth/register
Backend processes request

Response comes back:

Backend → Vite → Browser
✅ Key Benefits
No CORS errors
Cleaner API calls (no need to write full backend URL)
Works seamlessly during development
⚠️ Important Note
Proxy works only in development
It does NOT run in production

👉 In production:

Frontend & backend are usually on the same domain
OR handled via reverse proxy (NGINX)
🧪 API Call Example (Frontend)

Before proxy ❌:

axios.post('http://localhost:3000/api/auth/register', data)

After proxy ✅:

axios.post('/api/auth/register', data)
🔐 Google Authentication Setup

We implement Google OAuth 2.0 for secure login.

📌 Requirements

You need:

Client ID
Client Secret
Redirect (Callback) URL

⚙️ Step 1: Create Credentials
Go to Google Cloud Console
Create a new project
Enable Google OAuth API
Configure OAuth consent screen
Create OAuth Client ID

🔑 Step 2: Add Credentials to .env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
🧠 Step 3: Backend Setup

Install dependencies:

npm install passport passport-google-oauth20
🔧 Configure Passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

🔗 Routes Setup
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/dashboard');
  }
);

🔄 Google Auth Flow
User clicks Login with Google
Redirected to Google login page
User gives permission
Google redirects to callback URL
Backend verifies user
User logged in successfully

🔐 Security Notes
Never expose secrets in frontend
Always store credentials in .env or secure config
Use HTTPS in production

🎯 Summary
CORS issue solved using Vite Proxy
Proxy acts as a middle layer
Google Auth adds secure social login
System mimics real-world production architecture