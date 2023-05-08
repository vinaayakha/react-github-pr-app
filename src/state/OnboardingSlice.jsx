import { createSlice } from "@reduxjs/toolkit";


export const OnboardingSlice = createSlice({
  name: "Onboarding",
  initialState: {
    value: false,
    token: "",
    username: "",
    userData: {}
  },
  reducers: {
    isOnboarded: (state, action) => {
      state.value = action.payload.value;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.userData = action.payload.userData;
    },
  },
});


export const {isOnboarded} = OnboardingSlice.actions;

export default OnboardingSlice.reducer;