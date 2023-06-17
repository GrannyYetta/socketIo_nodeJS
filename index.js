const express = require("express");
const io = require("socket.io");

const port = process.env.PORT || 3001;
const app = express();



app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`the server is running on http://localhost${port}`);
});
