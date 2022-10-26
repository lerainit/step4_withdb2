import modalReducer from "../../store/modal/reducer";
import { openModal } from "../../store/modal/actions";

import { closeModal } from "../../store/modal/actions";


 

const initialState = {
    
    value: false
  

}


describe('Modal reducer works',()=>{

test('should return the initial state',()=>{
expect(modalReducer(undefined,{type:undefined})).toEqual(initialState)


})
test('should change value',()=>{
expect(modalReducer(initialState,{type: openModal})).toEqual({
    
        value: true
      
      

    })
    expect(modalReducer(initialState,{type: closeModal})).toEqual({
    
        value: false
     
      

    })
     

})
})