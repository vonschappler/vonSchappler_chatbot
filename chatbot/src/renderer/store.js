import { configureStore } from "@reduxjs/toolkit";
import viewFeaturesReducer from "./src/features/view/viewFeatures.slice";

const store = configureStore({
  reducer: {
    viewSettings: viewFeaturesReducer,
  },
});

export default store;
