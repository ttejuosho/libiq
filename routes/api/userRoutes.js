const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/id/habits"
router
	.route("/:id/habits")
	.get(userController.userHabit);

// Matches with "/api/user/id/books"
router
	.route("/:id/books")
	.get(userController.userBook);

	
module.exports = router;