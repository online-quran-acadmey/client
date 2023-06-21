import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./states/loginInfo.state";
import userSlice from "./states/user.state";
import userAuthApi from "./services/userAuth.service";
import { courseApi } from "./services/course.service";
import tutorAuth from "./services/tutorAuth.service";

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [tutorAuth.reducerPath]: tutorAuth.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware, courseApi.middleware, tutorAuth.middleware),
});

export default store;
