import { useEffect, useState, useCallback } from 'react';
import { useNetworkAwareApiClient } from './useNetworkAwareApiClient';
import { ENDPOINTS } from '../constants';
import { BountyPaginatedResponse } from '../interfaces';

export function useRewardsQuery() {
    const [rewards, setRewards] = useState<BountyPaginatedResponse | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const { get } = useNetworkAwareApiClient();

    const getPaginationParams = useCallback(() => {
        const limitPerPage = 20;
        if (rewards) {
            if (!rewards.next || (rewards.count !== undefined && rewards.results.length >= rewards.count)) {
                return null;
            }
            const url = new URL(rewards.next);
            const page = url.searchParams.get("page")
            return {
                // eslint-disable-next-line radix
                page: page ? (parseInt(page)) : 1,
                limit: limitPerPage
            }
        }
        return {
            page: 1,
            limit: limitPerPage
        }
    }, [rewards])

    const queryRewards = useCallback(async () => {
        if(isLoading) {
            return;
        }
        const limitAndNextPage = getPaginationParams();
        if (!limitAndNextPage) {
            return;
        }
        setIsLoading(true);
        setError(null)
        try {
            const { page, limit } = limitAndNextPage
            const response = await get<BountyPaginatedResponse>(ENDPOINTS.getPaginatedBounties(limit, page));
            if (response) {
                setRewards(prev => ({
                    ...prev,
                    count: response?.count,
                    next: response?.next,
                    previous: response?.previous,
                    results: [
                        ...(prev?.results ?? []),
                        ...(response?.results ?? []),
                    ],
                }));
            }

        } catch (e) {
            console.error(e)
            if (e instanceof Error) {
                setError(e);
            } else {
                setError(new Error("Something went wrong. Try again"));
            }
        } finally {
            setIsLoading(false);
        }
    }, [get, getPaginationParams, isLoading])

    useEffect(() => {
        if (!rewards && !isLoading && !error) {
            queryRewards()
        }
    }, [queryRewards, rewards, isLoading, error])

    return {
        rewards: rewards?.results ?? [],
        isLoading,
        queryRewards,
        error
    }
}
