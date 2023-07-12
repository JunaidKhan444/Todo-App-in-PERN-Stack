import express from "express";
import cors from "cors";

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server has started at Port 5000")
})
