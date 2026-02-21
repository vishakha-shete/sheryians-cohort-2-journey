// this file work is to start the server and connect the server with db
require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`);
})