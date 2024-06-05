import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

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
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(restaurant.image.asset).url() }}
        />
        <View className="space-y-2 px-3 pb-4">
          <Text className="pt-2 text-lg font-bold">{restaurant.name}</Text>
          {/* stars, reviews */}
          <View className="flex-row items-center space-x-1">
            <Icon.Star height={24} width={24} fill={"orange"} />
            <Text className="text-sm">
              <Text className="text-green-700">{restaurant.rating} </Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} reviews) ~{" "}
                <Text className="font-semibold">{restaurant?.type?.name}</Text>
              </Text>
            </Text>
          </View>

          {/* address */}
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height={16} width={16} color={"gray"} />
            <Text className="text-sm text-gray-700">
              Nearby ~ {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
