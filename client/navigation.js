import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="OrderPreparingScreen"
          component={OrderPreparingScreen}
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
