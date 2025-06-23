import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../types";

export const selectAllCollectedRewards = (state: RootState) => state.rewards.collectedRewards;

export const selectAllCollectedRewardsIds = createSelector(
    selectAllCollectedRewards,
    (rewards) => rewards.map(reward => reward.id)
);