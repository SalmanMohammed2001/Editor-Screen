import { createSlice } from "@reduxjs/toolkit";

let  initialState={
    welcomePageSliderRoute:"close"
};


export const welcomePageSliderSlice= createSlice({
    name:"welcomePageSliderRoute",
    initialState,
    reducers:{
        setRoute:(state,action)=>{
            state.welcomePageSliderRoute=action.payload;
        },
        setOpenRoute:(state,action)=>{
            state.welcomePageSliderRoute="open";
        },
        setCloseRoute:(state,action)=>{
            state.welcomePageSliderRoute="close";
        }

    }
});

export  const{setRoute,setOpenRoute,setCloseRoute}=welcomePageSliderSlice.actions;

export default welcomePageSliderSlice.reducer;