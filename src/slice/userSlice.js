import { createSlice } from "@reduxjs/toolkit";

let  initialState={
    users:{
        title:'Welcome to our form',
        description:'This is a description of the form',
        buttonText:'start',
        imageUrl:""
    }
};


export  const userSlice= createSlice({
    name:"users",
    initialState,
    reducers:{
        setUser:(state,action)=>{
           state.users = { ...state.users, ...action.payload }; 
        },
        removeImageUrl: (state) => {
            state.users.imageUrl = ""; 
        },
    }
});

export  const{setUser,removeImageUrl}=userSlice.actions;

export  default  userSlice.reducer;


