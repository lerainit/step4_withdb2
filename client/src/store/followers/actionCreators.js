import { setFollowers,addFollower } from "./actions";

export const setFollowersAC = () => async (dispatch) => {


    try {
        const {status,data} = await fetch('http://localhost:3001/users').then(response =>response.json());

     
     if(status === 'success'){
            
         console.log(data)  
           
        data.forEach( (isAuth,subscribers) => {  
          if(isAuth) { dispatch({ type:setFollowers,payload:subscribers})}
            })}
        
     

    } catch (err) {
     
        console.log(err);
    }


} 
export const addFollowerAC = (payload) =>({type:addFollower,payload})