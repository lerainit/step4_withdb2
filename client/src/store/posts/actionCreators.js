import { setPosts } from "./actions";

 export const setPostsAC =()=> async (dispatch)=>{
   
        try {
            const {status,data} = await fetch('http://localhost:3001/newPosts').then(response =>response.json());
         

            if(status === 'success'){
            
               console.log(data)
               
                dispatch({ type:setPosts,payload:data})
            
            }
    
        } catch (err) {
         
            console.log(err);
        }}
     