import { View, Text, StyleSheet } from 'react-native';
import { RewardListItemProps } from './types/rewardListItemProps';
import { RewardListItemImage } from './RewardListItemImage';
import { RewardListItemButton } from './RewardListItemButton';
import { COLORS } from '../../theme';
import { memo } from 'react';

export const RewardListItem = memo(function RewardListItem({ title, description, isAdded, onPress, imageUrl, isCollectButtonHidden = false }: RewardListItemProps) {
    const backgroundStyle = isAdded ? styles.selectedBgColor : styles.defaultBgColor;
    return (
        <View style={[styles.buttonStyle, backgroundStyle]}>
            <RewardListItemImage imageUrl={imageUrl} />
            <View style={styles.detailContainerStyle}>
                <Text style={styles.titleStyle} numberOfLines={2}>{title}</Text>
                <Text style={styles.descriptionStyle} numberOfLines={2}>{description}</Text>
                {
                    isCollectButtonHidden || !isAdded &&
                    <RewardListItemButton onPress={onPress} />
                }
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 20,
        padding: 15,
        flexDirection: "row",
        marginBottom: 15,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        elevation: 5,
    },
    defaultBgColor: {
        backgroundColor: "white"
    },
    selectedBgColor: {
        backgroundColor: COLORS.lightBlue
    },
    detailContainerStyle: {
        marginLeft: 10,
        gap: 10,
        flex: 1
    },
    titleStyle: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold"
    },
    descriptionStyle: {
        color: "gray"
    }
})