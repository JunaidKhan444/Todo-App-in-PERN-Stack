/**
 * TODO_APP-PERN-STACK
 *
 * @author   Junaid Khan
 *
 */

import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

// Routes
// create  a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id= $1", [id]);
        res.json(todo.rows);
        // res.status(200).send(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo 

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id= $2", [description, id]);
        res.json("Todo was Updated!");
        // res.status(200).send(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id= $1", [id]);
        res.json("Todo was Deleted!");
        // res.status(200).send(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.use((err, req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // res.setHeader("Access-Control-Allow-Credentials", true);
    // next();
    console.error(err.stack);
    res.status(500).send("Something broke 💩");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
