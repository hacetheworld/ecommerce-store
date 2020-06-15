const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./db");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
/************ MIDDLEVARES *************/

// app.use(express.());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ urlencoded: true }));

/************ ROUTES *************/
app.use("/api/v1/", productRoute);
app.use("/api/v1/user", authRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

// listen to the port
app.listen(PORT);
