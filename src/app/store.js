import { configureStore } from "@reduxjs/toolkit";
import welcomePageSliderSlice from '../slice/welcomePageSliderSlice'
import userReducer from '../slice/userSlice'

const store = configureStore({
    reducer:{
         WelcomePageSliderInfo:welcomePageSliderSlice,
         userInfo:userReducer,
    }
})

export default store;