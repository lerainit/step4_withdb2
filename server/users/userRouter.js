import express from "express";
import { getUsers,addNewSubscriber,deleteSubscriber } from "./userControllers.js";


const userRouter = express.Router()


userRouter.get('',getUsers)

userRouter.put('',addNewSubscriber)

userRouter.delete('',deleteSubscriber)

export default userRouter