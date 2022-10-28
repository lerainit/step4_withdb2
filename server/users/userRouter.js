import express from "express";
import { getUsers,addNewSubscriber,deleteSubscriber,becomeFollower } from "./userControllers.js";


const userRouter = express.Router()


userRouter.get('',getUsers)

userRouter.put('/subscribers',addNewSubscriber)
userRouter.put('/follower',becomeFollower)

userRouter.delete('',deleteSubscriber)

export default userRouter