import { configureStore } from "@reduxjs/toolkit";
import welcomePageSliderSlice from '../slice/welcomePageSliderSlice'

const store = configureStore({
    reducer:{
        WelcomePageSliderInfo:welcomePageSliderSlice
    }
})

export default store;