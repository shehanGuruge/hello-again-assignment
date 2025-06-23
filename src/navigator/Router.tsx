import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

export function Router() {
    return (
        <Stack.Navigator initialRouteName="tabs" screenOptions={{ headerTitle: "Hello Again"}}>
            <Stack.Screen name="tabs" component={TabNavigator} />
        </Stack.Navigator>
    )
}
