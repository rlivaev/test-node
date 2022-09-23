const Router = require ("express");
const router = new Router();
const userController = require("../controller/user-controller")

router.post("/user", userController.createUser)
router.get("/get", userController.getUser)
router.update("/update", userController.updateUser)
router.delete("/delete", userController.deleteUser)

module.exports = router;