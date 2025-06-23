import { Bounty } from "./bounty";
import { PaginationInfo } from "./paginationInfo";

export interface BountyPaginatedResponse extends PaginationInfo {
    results: Bounty[];
}