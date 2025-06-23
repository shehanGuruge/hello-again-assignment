import { Image, StyleSheet, View } from "react-native";
import { RewardListItemImageProps } from "./types";
import { GiftIcon } from "../../assets";

export function RewardListItemImage({ imageUrl }: RewardListItemImageProps) {
    return (
        <View style={styles.containerStyle}>
            {
                imageUrl ?
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: imageUrl }}
                    /> :
                    <GiftIcon height={60} width={60} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "rgba(0,0,0,.05)",
        borderRadius: 20,
        padding: 10,
        width: 80,
        height: 80
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 10
    }
})