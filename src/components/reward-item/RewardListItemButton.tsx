import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RewardListItemButtonProps } from "./types";

export function RewardListItemButton({ onPress }: RewardListItemButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.buttonStyle}>
            <Text>Collect</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "flex-end",
        borderRadius: 5,
        backgroundColor: "orange",
        padding: 5
    }
})