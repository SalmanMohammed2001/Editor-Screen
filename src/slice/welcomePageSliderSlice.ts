

import { createSlice} from "@reduxjs/toolkit";


interface WelcomePageSliderState {
    welcomePageSliderRoute: string
}


const initialState: WelcomePageSliderState = {
    welcomePageSliderRoute: "close",
};


export const welcomePageSliderSlice = createSlice({
  name: "welcomePageSliderRoute",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.welcomePageSliderRoute = action.payload;
    },
   
  },
});


export const { setRoute } = welcomePageSliderSlice.actions;

export default welcomePageSliderSlice.reducer;
