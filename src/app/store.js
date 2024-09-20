import { configureStore } from "@reduxjs/toolkit";
import welcomePageSliderSlice from '../slice/welcomePageSliderSlice'
import userReducer from '../slice/userSlice'
import imageSectionReducer from '../slice/imageSectionSlice'
import emailPageSliderSlice from '../slice/emailPageSliderSlice'

const store = configureStore({
    reducer:{
         WelcomePageSliderInfo:welcomePageSliderSlice,
         userInfo:userReducer,
         imageSectionInfo:imageSectionReducer,
         emailPageSliderInfo:emailPageSliderSlice
    }
})

export default store;