const router = require("express").Router();
const bookRoutes = require("./bookRoutes");
const habitRoutes = require("./habitRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");


// routes
router.use("/books", bookRoutes);
router.use("/habit", habitRoutes);
router.use("/user", userRoutes);
router.use("/auth",authRoutes);

module.exports = router;
