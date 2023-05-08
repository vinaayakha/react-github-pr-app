import { createSlice } from "@reduxjs/toolkit";


export const OnboardingSlice = createSlice({
  name: "Onboarding",
  initialState: {
    value: false,
  },
  reducers: {
    isOnboarded: (state, action) => {
      console.log(action);
      state.value = action.payload
    },
  },
});


export const {isOnboarded} = OnboardingSlice.actions;

export default OnboardingSlice.reducer;