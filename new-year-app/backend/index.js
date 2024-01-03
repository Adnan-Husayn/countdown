const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async ( req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success){
        res.status(411).json({
            msg : "wrong input!!",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
});

app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.find();
      
      res.json({
        todos
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  });
  




app.put('/completed', async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "wrong input",
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked completed"
    })
});







app.listen(3000);