const ecpress = require ("express")
const cookieParser = require ("cookie-parser")
const authRouter = require("./routes/Auth.router")

const app = express()
app.use(express.json())
app.use(cookieParser())

// post/api/auth/register
app.use("./routes/Auth.router")

module.exports = app