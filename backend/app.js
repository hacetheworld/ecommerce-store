const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

/************ MIDDLEVARES *************/

app.use(express.json());

/************ ROUTES *************/

app.get("/", (req, res) => {
  res.send("We are on home");
});

// listen to the port
app.listen(PORT);
