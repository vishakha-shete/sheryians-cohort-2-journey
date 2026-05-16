import express from "express";


const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send("hello-world...!")
});

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Health check successful",
    });
});


app.use("/404", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found",
    });
});

export default app;