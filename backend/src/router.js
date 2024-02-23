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
// const moviesControllers = require("./controllers/moviesControllers");

// Route to get mangas
router.get("/mangas", mangasControllers.getAllMangas);

// Route to get adverts
// Route to display advert table
router.get("/adverts", advertsControllers.getAllAdverts);
router.get("/adverts/:id", advertsControllers.getAllAdvertsById);
// Route to display advert card
router.get("/display-adverts", advertsControllers.getAllCards);
// Route to get only adverts for one item, ordered by date of publication (homepage)
router.get(
  "/unique-adverts-date-desc",
  advertsControllers.getRecentUniqueAdverts
);
// Route to get only adverts for batch, ordered by date of publication (homepage)
router.get("/batch-adverts-date-desc", advertsControllers.getRecentBatch);
// Route to get detailed information for one specific advert (page on detail advert)
router.get("/display-adverts/:id", advertsControllers.getAdvertById);
// Route to get all adverts for one specific seller (page on detail advert)
router.get(
  "/display-adverts-byseller/:id",
  advertsControllers.getAdvertsBySeller
);
// Route to get all adverts for one specific genre (page explorer)
router.get(
  "/display-adverts-bygenre/:id",
  advertsControllers.getAdvertsByGenre
);

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */
router.get("/characters", charactersControllers.browse);

module.exports = router;
