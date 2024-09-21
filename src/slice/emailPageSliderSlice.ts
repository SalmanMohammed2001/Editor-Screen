



import { createSlice } from "@reduxjs/toolkit";


interface EmailDetails {
  title: string;
  description: string;
  email: string;
}

interface EmailPageSliderState {
  details: EmailDetails;
}

const initialState: EmailPageSliderState = {
  details: {
    title: 'Enter your Email',
    description: 'This will be used to contact you for the next steps',
    email: '',
  },
};


export const emailPageSliderSlice = createSlice({
  name: "emailPageSlider",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = { ...state.details, ...action.payload };
    },
  },
});


export const { setDetails } = emailPageSliderSlice.actions;
export default emailPageSliderSlice.reducer;
