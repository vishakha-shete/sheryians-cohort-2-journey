import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    res.send(`The sum of the first 100 natural numbers is: ${sum}`);
});

export default app;