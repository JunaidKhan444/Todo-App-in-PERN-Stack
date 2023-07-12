import express from "express";
import cors from "cors";

import { pool } from "./db.js";

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

//Routes

// create  a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1)", [description]);
        res.json(newTodo)
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("Server has started at Port 5000");
})
