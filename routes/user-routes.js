import Router from "express";
const router = new Router();
import userController from "../controller/user-controller.js";

router.get('/users', function (req, res) {
   res.send(userController.getUsers);
   console.log('coke');
});
// router.get("/user/:id", userController.getUser)
// router.put("/user", userController.updateUser)
// router.delete("/user/:id", userController.deleteUser)

export default router;