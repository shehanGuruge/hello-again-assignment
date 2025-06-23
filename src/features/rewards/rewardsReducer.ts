import { createReducer } from "@reduxjs/toolkit";
import { RewardsState } from "./rewardsState";
import { collectReward } from "./rewardsActions";

const initialState: RewardsState = {
    collectedRewards: []
}

const rewardsReducer = createReducer(initialState, (builder) => {
    builder.addCase(collectReward, (state, action) => {
        state.collectedRewards.push(action.payload);
    })
})

export default rewardsReducer;
