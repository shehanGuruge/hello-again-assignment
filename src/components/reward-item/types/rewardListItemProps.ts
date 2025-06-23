import { RewardListItemButtonProps } from "./rewardListItemButtonProps";
import { RewardListItemImageProps } from "./rewardListItemImageProps";

export type RewardListItemProps = RewardListItemImageProps & RewardListItemButtonProps & {
    title?: string;
    description?: string;
    isAdded: boolean;
    isCollectButtonHidden?: boolean;
}