const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
require("./db");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
/************ MIDDLEVARES *************/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "POST,PUT,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});
/************ ROUTES *************/
app.use("/api/v1/", productRoute);
app.use("/api/v1/user", authRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

// listen to the port
app.listen(PORT);
