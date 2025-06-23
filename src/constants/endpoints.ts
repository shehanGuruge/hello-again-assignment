export const ENDPOINTS = {
    getBounties: "clients/5189/bounties/",
    getPaginatedBounties: (limit: number, page: number) => {
        const params = new URLSearchParams({ limit: limit.toString(), page: page.toString() });
        return `${ENDPOINTS.getBounties}?${params.toString()}`;
    }
}