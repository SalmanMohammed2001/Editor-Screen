

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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
    // Optional: If you want specific actions, uncomment these
    // setOpenRoute: (state) => {
    //   state.welcomePageSliderRoute = "open"; // No payload needed
    // },
    // setCloseRoute: (state) => {
    //   state.welcomePageSliderRoute = "close"; // No payload needed
    // },
  },
});


export const { setRoute } = welcomePageSliderSlice.actions;

export default welcomePageSliderSlice.reducer;
