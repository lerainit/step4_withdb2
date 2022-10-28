import { setFollowers,becomeFollower } from "./actions";
const initialValue ={

value:[],
isLoading:true

}

const FollowerReducer = (state = initialValue,action) =>{

switch(action.type){

    case setFollowers:{
return({value:action.payload,isLoading:false})

    }

case becomeFollower: {
let usersArr = state.value

 usersArr[action.payload.userIndex].isFollower = true

 fetch('http://localhost:3001/users/follower', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId:action.payload.id})
  })



return {value:usersArr,isLoading:false}
}
default :{
    return state
}




}




}
export default FollowerReducer