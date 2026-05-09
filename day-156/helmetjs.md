Day-156 Learning About Helmet.js & Web Security
🚀 Today’s Session

In today’s class, we learned about Helmet.js and different types of web attacks. Helmet.js is related to website security and helps us secure our Express.js applications from many common attacks.

Before learning Helmet.js, we first understood different attacks that hackers use on websites.

🛡 What is Helmet.js?

Helmet.js is an Express middleware that helps secure web applications by setting different HTTP security headers.

It protects websites from many common attacks like:

XSS Attacks
Clickjacking
Cross-Origin Attacks
Data Theft
Rogue Feature Access
SSL Stripping
And many more security vulnerabilities

Helmet.js helps prevent around 15+ security attacks.

⚠️ Attacks Learned Today
1️⃣ Cross-Site Scripting (XSS)
📌 Understanding XSS

Suppose:

A user opens bank.com
User logs in with:
Username
Password
Cookies and tokens are stored in the browser

Whenever the browser sends requests to the server:

Cookie data is also sent with the request

Example:

/transaction/accountID?amount=1000

This is normal behavior.

But if the website is not secure:

An attacker can inject a malicious script into the website

Example:

<script>
transferMoney()
</script>

That script can:

Access user data
Send requests automatically
Steal cookies
Perform unauthorized transactions

This attack is called Cross-Site Scripting (XSS).

✅ Solution Using Helmet.js

Helmet.js helps reduce XSS attacks by:

Setting secure headers
Restricting dangerous scripts
Protecting browser behavior
2️⃣ Clickjacking Attack
📌 Understanding Clickjacking

In this attack:

The attacker creates a fake website
Places your real website inside an invisible iframe

Example:

Your real website contains a button:
"Complete Transaction"

Attacker:

Sets iframe opacity to 0
Places fake buttons over it

User thinks:

They are clicking another button

But actually:

They are clicking your hidden website button

This attack is called Clickjacking.

✅ Solution Using Helmet.js

Helmet.js prevents websites from being embedded inside iframes.

Because of this:

Attackers cannot create hidden iframes
Clickjacking attacks fail
3️⃣ Cross-Origin Embedding Attack
📌 Understanding

Attackers can inject external scripts into your website using:

<script src="malicious-site.com"></script>

These scripts may:

Steal data
Track users
Inject harmful code
✅ Solution Using Helmet.js

Helmet.js restricts:

Which domains can load content
Which scripts are allowed

This secures the application from unknown external sources.

4️⃣ Cross-Origin Data Theft
📌 Understanding

Suppose:

axisbank.com hosts some resources
hdfcbank.com uses those resources on their frontend

Example:

PDFs
Images
Files

Now HDFC users are accessing resources hosted by Axis Bank.

This can lead to:

Resource misuse
Data theft
Unauthorized access
✅ Solution Using Helmet.js

Helmet.js tells the browser:

Which resources belong to which domain
Prevents unauthorized cross-origin resource usage
5️⃣ Rogue Feature Access
📌 Understanding

Attackers may inject scripts like:

<script>
accessCamera()
accessMicrophone()
accessGeolocation()
</script>

This script can:

Access webcam
Access microphone
Access location

And secretly send data to attackers.

This is called Rogue Feature Access.

It can lead to:

Privacy leaks
Blackmailing
Unauthorized spying
✅ Solution Using Helmet.js

Helmet.js helps restrict:

Camera access
Microphone access
Geolocation permissions

Even if attackers inject scripts:

Browser permissions are denied
Attack fails
🧹 Sanitization for XSS Protection

Today we also learned about sanitization libraries.

📌 Libraries Used
1. Express Validator

Used for:

Validating user input
Preventing invalid or harmful data
2. Express Mongo Sanitize

Used for:

Preventing MongoDB injection attacks
3. Perfect Express Sanitize

Used for:

Sanitizing malicious input data
🌐 HTTP vs HTTPS
HTTP
Data transfers in plain text
Anyone can read the data
HTTPS
Data transfers in encrypted form
Data is secure and unreadable
⚠️ SSL Stripping / Man-In-The-Middle Attack
📌 Understanding

Normally:

User and server communicate securely using HTTPS

But in SSL stripping:

Attacker comes between user and server
Forces communication into HTTP

Now:

Data becomes plain text
Attacker can read:
Passwords
Cookies
Sensitive data

This is called:

SSL Stripping
Man-In-The-Middle Attack
✅ Solution Using Helmet.js

Helmet.js forces browsers to:

Always use HTTPS
Prevent insecure HTTP communication

This protects user data from attackers.

🛠 How to Use Helmet.js
Step 1: Install Helmet
npm install helmet
Step 2: Import Helmet
import helmet from "helmet";
Step 3: Use Helmet Middleware
app.use(helmet());

This enables security headers for your Express application.

📚 What I Learned Today
Importance of website security
What is Helmet.js
XSS attacks
Clickjacking attacks
Cross-origin attacks
Rogue feature access
SSL stripping attacks
Difference between HTTP and HTTPS
How Helmet.js protects Express applications
How sanitization works
✨ Conclusion

Today’s session was very important for understanding web security. We learned different types of attacks used by hackers and how Helmet.js helps secure our Express.js applications using security headers and browser protection mechanisms. This session helped us understand how security plays an important role in real-world web development.