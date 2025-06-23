import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AvailableRewardsScreen } from "../screens";
import { CollectedRewardsScreen } from "../screens/CollectedRewardsScreen";
import { CheckIcon, GiftHandIcon } from "../assets";
import { SvgProps } from "react-native-svg";
import { ColorValue } from "react-native";

const Tab = createBottomTabNavigator();

const renderTabIcon = (IconComponent: React.FC<SvgProps>) => ({ color }: {color: ColorValue}) => (
  <IconComponent width={19} height={19} fill={color} />
);

export function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="rewards" component={AvailableRewardsScreen} options={{title: "Available Rewards",  tabBarIcon: renderTabIcon(GiftHandIcon), lazy: true }} />
            <Tab.Screen name="collected_rewards" component={CollectedRewardsScreen} options={{title: "Collected Rewards", tabBarIcon: renderTabIcon(CheckIcon), lazy: true}}/>
        </Tab.Navigator>
    )
}