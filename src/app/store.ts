import { configureStore } from "@reduxjs/toolkit";
import welcomePageSliderReducer from '../slice/welcomePageSliderSlice'
import userReducer from '../slice/userSlice'
import imageSectionReducer from '../slice/imageSectionSlice'
import emailPageSliderSlice from '../slice/emailPageSliderSlice'





// const store = configureStore({
//     reducer:{
//          WelcomePageSliderInfo:welcomePageSliderSlice,
//          userInfo:userReducer,
//          imageSectionInfo:imageSectionReducer,
//          emailPageSliderInfo:emailPageSliderSlice
//     }
// })

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import welcomePageSliderReducer from '../slice/welcomePageSliderSlice';
// import userReducer from '../slice/userSlice';
// import imageSectionReducer from '../slice/imageSectionSlice';
// import emailPageSliderSlice from '../slice/emailPageSliderSlice';


export interface RootState {
  welcomePageSliderInfo: ReturnType<typeof welcomePageSliderReducer>;
  userInfo: ReturnType<typeof userReducer>;
  imageSectionInfo: ReturnType<typeof imageSectionReducer>;
  emailPageSliderInfo: ReturnType<typeof emailPageSliderSlice>;
}


const store = configureStore({
  reducer: {
    welcomePageSliderInfo: welcomePageSliderReducer,
    userInfo: userReducer,
    imageSectionInfo: imageSectionReducer,
    emailPageSliderInfo: emailPageSliderSlice,
  },
});


//export type AppDispatch = typeof store.dispatch; 
export default store;
