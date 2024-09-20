import { configureStore } from "@reduxjs/toolkit";
import welcomePageSliderSlice from '../slice/welcomePageSliderSlice'
import userReducer from '../slice/userSlice'
import imageSectionReducer from '../slice/imageSectionSlice'

const store = configureStore({
    reducer:{
         WelcomePageSliderInfo:welcomePageSliderSlice,
         userInfo:userReducer,
         imageSectionInfo:imageSectionReducer
    }
})

export default store;