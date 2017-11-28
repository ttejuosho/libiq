const router = require("express").Router();
const bookRoutes = require("./bookRoutes");
const habitRoutes = require("./habitRoutes");

// Book routes
router.use("/books", bookRoutes);
router.use("/habit", habitRoutes);

module.exports = router;
