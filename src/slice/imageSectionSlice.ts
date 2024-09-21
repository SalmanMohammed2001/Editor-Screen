


import { createSlice } from "@reduxjs/toolkit";
interface ImageSectionState {
  imageSectionRoute: string; 
}

const initialState: ImageSectionState = {
  imageSectionRoute: "default",
};


export const imageSectionSlice = createSlice({
  name: "imageSectionRoute",
  initialState,
  reducers: {
    setImageRoute: (state, action) => {
      state.imageSectionRoute = action.payload; 
    },
  },
});


export const { setImageRoute } = imageSectionSlice.actions;
export default imageSectionSlice.reducer;
