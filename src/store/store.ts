import { configureStore } from "@reduxjs/toolkit";
import rewardsReducer from "../features/rewards/rewardsReducer";

export const store = configureStore({
    reducer: {
        rewards: rewardsReducer
    }
})