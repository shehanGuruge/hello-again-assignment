import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'
import { useAppSelector } from '../hooks/useAppSelector'
import { selectAllCollectedRewards } from '../features'
import { RewardListItem } from '../components'

export function CollectedRewardsScreen() {
  const collectedRewards = useAppSelector(selectAllCollectedRewards)
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={collectedRewards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <RewardListItem
            title={item.name}
            description={item.activation_description}
            imageUrl={item.image}
            isCollectButtonHidden
            isAdded={false} />
        }
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          <View style={styles.listEmptyContainerStyle}>
            <Text style={styles.textPlaceholderStyle}>You haven't collected any rewards. Collect some rewards from the rewards screen.</Text>
          </View>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 10,
    flexGrow: 1
  },
  listEmptyContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textPlaceholderStyle: {
    textAlign: "center"
  }
})