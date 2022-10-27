import { setFollowers,addFollowers } from "./actions";
const initialValue ={

value:[],
isLoading:true

}

const FollowerReducer = (state = initialValue,action) =>{

switch(action.type){

    case setFollowers:{
return({value:action.payload,isLoading:false})

    }

case addFollowers: {
let followersArr = state.value
let follower = action.payload.follower
followersArr.push(follower)
}
default :{
    return state
}




}




}
export default FollowerReducer