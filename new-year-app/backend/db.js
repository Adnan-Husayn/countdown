const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://adnanhusayn:gLPK2bMv6fpPU7J@eren1000-7.ldsc5ok.mongodb.net/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
};