const router = require("express").Router();
const habitController = require("../../controllers/habitController");

// Matches with "/api/habit"
router.route("/")
  .get(habitController.findAll)
  .post(habitController.create);

//Matches with "/api/habit/:id"
router
  .route("/:id")
  .get(habitController.findById)
  .put(habitController.update)
  .delete(habitController.remove);

module.exports = router;