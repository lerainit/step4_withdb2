import { getUsersData,addNewSubscriberData } from "./userDataLayers.js";

export const getUsers =  async (req,res) =>{
    const data = await  getUsersData()
    res.json({status:'success',data})
}
export const addNewSubscriber = async (req,res) =>{
    console.log(req.body.userId)
    const data =await  addNewSubscriberData(req.body.subscriber,req.body.userId);
res.json({status:'success',data})

}