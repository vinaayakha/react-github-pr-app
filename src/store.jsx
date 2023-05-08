import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from './state/OnboardingSlice';

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer : {
        onboarding: onboardingReducer,
    }
})