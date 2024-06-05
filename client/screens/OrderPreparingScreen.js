import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function OrderPreparingScreen() {
  const navigation = useNavigation();

  // show this for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      // move to delivery screen
      navigation.navigate("DeliveryScreen");
    }, 1000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/bikeGuy.png")}
        className="h-80 w-80"
      />
    </View>
  );
}
