import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaryItems: [],
};

const DataSlice = createSlice({
  name: "DiaryData",
  initialState,
  reducers: {
    addToDiary: (state, action) => {
      state.diaryItems.push(action.payload);
      //   const existingItem = state.diaryItems.find(
      //     (item) => item.id === action.payload.id
      //   );
      //   if (existingItem) {
      //     existingItem.quantity += 1;
      //   } else {
      //     state.diaryItems.push({ ...action.payload, quantity: 1 });
      //   }
    },
  },
});

// Make sure all reducers are exported here
export const { addToDiary } = DataSlice.actions;

export default DataSlice.reducer;
