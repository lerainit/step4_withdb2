import mongoose from 'mongoose'

const users = [
    {"id":1,
   "subscribers":[],
   "nickName":"ilya25",
   "url":"https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg",
   "name":"ivan kyrpa",
   "info":"succesfull investor and interpeneur",

},
{"id":2,
    "name":"ilya stezenko",
    "nickName":"vania123",
    "url":"https://st.depositphotos.com/1986419/2346/i/600/depositphotos_23465244-stock-photo-waist-up-portrait-of-a.jpg",
    "subscribers":[],
    "info":"cardiologist in Medea",
 
 }
]

const userSchema = new mongoose.Schema({
id:Number,
name:String,
nickName:String,
url:String,
subscribers:Array,
info:String

})

const Users = mongoose.model('users',userSchema)

    

export  const getUsersData = async () =>{
    const users_db = await Users.find({})
    console.log(users_db)
   return users_db
}
    
  

export const addNewSubscriberData = async (subscriber,userId) =>{
   let usersdb = await Users.findOne({id:userId})  
    usersdb.subscribers.push(subscriber)
 await usersdb.save()
    return usersdb

}