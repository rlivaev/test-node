import Router from "express";
const router = new Router();
import {getUsers} from "../controller/user-controller.js";
import{deleteUsers} from "../controller/user-controller.js";
import {addUsers} from "../controller/user-controller.js";
import {updateUsers} from "../controller/user-controller.js";


router.get('/users', getUsers)
router.post('/users', addUsers)
router.put('/users', updateUsers)
// router.put("/user", userController.updateUser)
// router.delete("/user/:id", userController.deleteUser)
router.delete('/users/:id', deleteUsers)

export default router;