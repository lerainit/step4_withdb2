import { setPosts } from "./actions";

const initialValue = {
    value:[],
    isLoading:true
}


const postsReducer = (state = initialValue,action) =>{

switch (action.type){


case setPosts: {
return {value:action.payload,isLoading:false}
}
default:{
    return state
}


}


}

export default postsReducer