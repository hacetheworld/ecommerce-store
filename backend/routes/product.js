const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Product = require("../model/ProductModal");
const Category = require("../model/CatModal");

// Get all products
router.get("/product", (req, res) => {
  Product.find()
    .then((products) => res.json([]))
    .catch((err) =>
      res.status(404).json({
        nopostsfound: "No product found",
      })
    );
});

// Get all  category name
router.get("/category", (req, res) => {
  Category.find()
    .then((category) => res.json([]))
    .catch((err) =>
      res.status(404).json({
        nocatsfound: "No Category found",
      })
    );
});

// Get all product by specific category name
router.get("/product/:cat_name", (req, res) => {
  Product.find({ routeName: req.params["cat_name"] })
    .then((product) => res.json(product))
    .catch((err) =>
      res.status(404).json({
        nocatsfound: "No product found",
      })
    );
});

module.exports = router;
