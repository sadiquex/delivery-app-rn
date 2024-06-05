import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ restaurant }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("RestaurantScreen", { ...restaurant })} // (params = restaurant)
    >
      <View
        className="mr-6 rounded-3xl bg-white shadow-md"
        style={{
          shadowColor: themeColors.bgColor(0.4),
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 7,
          elevation: 4,
        }}
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
        <View className="pb-4 px-3 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          {/* stars, reviews */}
          <View className="flex-row items-center space-x-1">
            <Icon.Star height={24} width={24} fill={"orange"} />
            <Text className="text-sm">
              <Text className="text-green-700">{restaurant.stars} </Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} reviews) ~{" "}
                <Text className="font-semibold">{restaurant.category}</Text>
              </Text>
            </Text>
          </View>

          {/* address */}
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height={16} width={16} color={"gray"} />
            <Text className="text-gray-700 text-sm">
              Nearby ~ {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
