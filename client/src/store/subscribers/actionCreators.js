import { addSubscriber, setSubscribers } from "./actions";




export const setSubscribersAC =() =>  async (dispatch) =>{
   
        try {
            const {status,data} = await fetch('http://localhost:3001/users').then(response =>response.json());
        
    if(status === 'success'){
        
     
               
   
                dispatch({ type:setSubscribers,payload:data})
            
    }
    
        } catch (err) {
         
            console.log(err);
        }}
       

export const addSubscriberAC = (payload) =>({type:addSubscriber,payload})
