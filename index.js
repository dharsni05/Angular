const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Todolist';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1); // Exit the process if unable to connect to MongoDB
});

// Todo schema
const todoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  task: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('todolists', todoSchema);

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { id,task, completed } = req.body;
    const todo = new Todo({
      id,
      task,
      completed
    });
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.put('/todos/:task', async (req, res) => {
  try {
    const { task } = req.params; 
    const { completed } = req.body;


    const updatedTodo = await Todo.findOneAndUpdate(
      { task: task }, 
      { completed: completed }, 
      { new: true } 
    );

    if (!updatedTodo) {
      
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(updatedTodo); 
  } catch (err) { 
   
    res.status(400).json({ error: err.message });
  }
});


app.delete('/todos/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.json(deletedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
