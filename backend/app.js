const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./db");
const productRoute = require("./routes/product");
/************ MIDDLEVARES *************/

app.use(express.json());

/************ ROUTES *************/
app.use("/api/v1/", productRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

// listen to the port
app.listen(PORT);
