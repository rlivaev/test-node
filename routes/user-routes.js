import Router from "express";
const router = new Router();
import {getUsers, addUser, deleteUser, updateUser} from "../controller/user-controller.js";


router.get('/users', getUsers)
router.post('/users/new', addUser)
router.put('/users', updateUser)
router.delete('/users/:id', deleteUser)

export default router;