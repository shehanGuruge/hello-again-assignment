import { createAction } from "@reduxjs/toolkit";
import { Bounty } from "../../interfaces/bounty";

const COLLECT_REWARD_ACTION_TYPE = "rewards/COLLECT_REWARD";

export const collectReward = createAction<Bounty>(COLLECT_REWARD_ACTION_TYPE);
