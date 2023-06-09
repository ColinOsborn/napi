const { handle } = require("express/lib/application");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB!");
});

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

todoSchema.statics.createDocument = function (params, callback) {
  return Todo.create(
    { text: params.text, done: params.done },
    function (err, todo) {
      if (err) return handleError(err);
      callback(todo);
    }
  );
};

todoSchema.statics.all = function (callback) {
  return Todo.find({}, function (err, todos) {
    callback({ todos: todos });
  });
};

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
