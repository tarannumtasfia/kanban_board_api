const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
  { id: 1, title: "Task 1", completed: false, status: "todo" },
  { id: 2, title: "Task 2", completed: true, status: "done" },
  { id: 3, title: "Task 3", completed: false, status: "inReview" },
  { id: 4, title: "Task 4", completed: false, status: "backlog" },
];

app.get("/", (req, res) => {
  res.json(tasks);
});



module.exports = serverless(app);
