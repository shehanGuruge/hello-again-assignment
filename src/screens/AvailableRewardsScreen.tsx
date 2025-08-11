import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ActivityIndicator, View, Button, StyleSheet } from 'react-native';
import { useRewardsQuery } from '../hooks/useRewardsQuery';
import { RewardListItem, showSnackBar, SnackBarType } from '../components';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAllCollectedRewardsIds, collectReward } from '../features';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { Bounty } from '../interfaces/bounty';
import { getErrorMessageForError } from '../helpers';
import { debounce } from '../helpers';

export function AvailableRewardsScreen() {
    const { isLoading, queryRewards, rewards, error } = useRewardsQuery();
    const collectedRewardIds = useAppSelector(selectAllCollectedRewardsIds);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (error) {
            const message = getErrorMessageForError(error);
            showSnackBar(message, SnackBarType.FAILURE);
        }
    }, [error])

    const debouncedQueryRewards = useMemo(() =>
        debounce(() => {
            if (!isLoading) {
                queryRewards();
            }
        }, 100), 
    [isLoading, queryRewards]);

    const handledOnEndReached = useCallback(() => {
        debouncedQueryRewards();
    }, [debouncedQueryRewards]);


    function handleRetryPress() {
        if (!isLoading) {
            queryRewards()
        }
    }

    const handleCollectPress = useCallback((item: Bounty) => {
        dispatch(collectReward(item))
    }, [dispatch])

    const renderItem = useCallback(({ item }: { item: Bounty }) => {
        return (
            <RewardListItem
                title={item.name}
                description={item.activation_description}
                onPress={() => handleCollectPress(item)}
                imageUrl={item.image}
                isAdded={collectedRewardIds.has(item.id)} />
        )
    }, [collectedRewardIds, handleCollectPress])

    return (
        <View style={styles.containerStyle}>
            <FlatList
                data={rewards}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.contentContainerStyle}
                ListHeaderComponent={
                    error && !isLoading && rewards.length === 0 ? <Button onPress={handleRetryPress} title='Retry' /> : null
                }
                renderItem={renderItem}
                onEndReachedThreshold={0.2}
                onEndReached={handledOnEndReached}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={7}
                removeClippedSubviews
                ListEmptyComponent={
                    isLoading && rewards.length === 0 ?
                        <View style={styles.listEmptyContainerStyle}>
                            <ActivityIndicator />
                        </View> : null
                }
                ListFooterComponent={rewards.length > 0 && isLoading ? <ActivityIndicator /> : null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexGrow: 1
    },
    listEmptyContainerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})