import { addSubscriber,setSubscribers } from "./actions";

const initialValue = {
    value:[],
    isLoading:true
 
}
const subscriberReducer =(state =initialValue,action) =>{

    switch (action.type){
case setSubscribers:{

    return {value:action.payload,isLoading:false}
}

       
        case addSubscriber: {
                let users = action.payload.users
                let index;
let id = action.payload.id
console.log(id)
             if(action.payload.index === 0){
index = 1
             }else{
                 index = 0
             }
             let subscribers = users[action.payload.index].subscribers
 

             subscribers.push(users[index])
             users[action.payload.index].subscribers = subscribers
 
        
         

             fetch('http://localhost:3001/users', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({subscriber:users[index] , userId:id})
})
if(subscribers.length < 50){
    localStorage.setItem('users',JSON.stringify(users))

return {value:JSON.parse(localStorage.getItem('users')),isLoading:false} }
else if (subscribers.length >= 50){
   return {value:users,isLoading:false}
}
            }
           
        default:{
            return state
        }
        
    }


}
export default subscriberReducer