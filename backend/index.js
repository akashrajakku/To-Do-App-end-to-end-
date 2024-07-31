const express = require("express")
const app= express();
const {createTodo, updateTodo} = require("../backend/types")
const {todo} = require("./db")
const cors= require("cors")

app.use(express.json());
app.use(cors());

//one route to add a new todo
//create a types.js file to define types using zod middleware

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Invalid input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    res.json({
        msg: "Todo created"
    })
})

//one route to get list of todos from backend 

app.get("/todos", async function(req, res){
    const listOfTodos= await todo.find({});
    
    res.json({
        listOfTodos
    })
})

//one to update the todo once it is done

app.put("/completed",async function(req, res){
    const updatePayload= req.body;
    const parsePayload= updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Invalid input"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as done"
    })
})

app.listen(3000);

