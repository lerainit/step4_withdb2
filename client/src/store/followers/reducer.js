import { setFollowers,addFollower } from "./actions";
const initialValue ={

value:[],
isLoading:true

}

const FollowerReducer = (state = initialValue,action) =>{

switch(action.type){

    case setFollowers:{
return({value:action.payload,isLoading:false})

    }

case addFollower: {
let followersArr = state.value
let follower = followersArr[action.payload.userIndex].isFollower
follower = true
return {value:followersArr,isLoading:false}
}
default :{
    return state
}




}




}
export default FollowerReducer