import Router from "express";
const router = new Router();
import {getUsers} from "../controller/user-controller.js";

router.get('/users', getUsers)
// router.get("/user/:id", userController.getUser)
// router.put("/user", userController.updateUser)
// router.delete("/user/:id", userController.deleteUser)

export default router;