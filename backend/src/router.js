const express = require("express");
// http://localhost:4242/api/characters

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import itemControllers module for handling item-related operations
const mangasControllers = require("./controllers/mangasControllers");
const advertsControllers = require("./controllers/advertsControllers");
const itemControllers = require("./controllers/itemControllers");
const charactersControllers = require("./controllers/charactersControllers");
// const searchControllers = require("./controllers/searchControllers");
// const moviesControllers = require("./controllers/moviesControllers");

router.get("/mangas", mangasControllers.getAllMangas);
router.get("/adverts", advertsControllers.getAllAdverts);
router.get("/display-adverts", advertsControllers.getAllCards);
router.get(
  "/unique-adverts-date-desc",
  advertsControllers.getRecentUniqueAdverts
);
router.get("/batch-adverts-date-desc", advertsControllers.getRecentBatch);

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */
router.get("/characters", charactersControllers.browse);

// Search route, post and retrieve search queries for advert
// router.get("/search", searchControllers.getSearchQuery);
// router.post("/explore", searchControllers.postSearchQuery);

// Post ma query du front au back
router.get("/explore", advertsControllers.getAllAdverts);
router.get("/explore/:query", advertsControllers.getSearchAdverts);

module.exports = router;
