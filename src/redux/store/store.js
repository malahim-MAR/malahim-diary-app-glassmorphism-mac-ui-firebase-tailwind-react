import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "../reducer/DataSlice";

const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
});

export { store };
