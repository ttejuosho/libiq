const router = require("express").Router();
const bookRoutes = require("./bookRoutes");
// const habitRoutes = require("./habitRoutes");
const userRoutes = require("./userRoutes");


// routes
router.use("/books", bookRoutes);
// router.use("/habit", habitRoutes);
 router.use("/user", userRoutes);

module.exports = router;
