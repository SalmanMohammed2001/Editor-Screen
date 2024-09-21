import { createSlice } from "@reduxjs/toolkit";

let  initialState={
    details:{
        title:'Enter your Email',
        description:'This will be used contact you for the next steps',
        email:''
       
    }
};


export  const emailPageSliderSlice= createSlice({
    name:"details",
    initialState,
    reducers:{
        setDetails:(state,action)=>{
           state.details = { ...state.users, ...action.payload }; 
        },
      
    }
});

export  const{setDetails}=emailPageSliderSlice.actions;

export  default  emailPageSliderSlice.reducer;


