import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ featureItem }) {
  const { _id, name, description, restaurants } = featureItem;

  return (
    <View className="px-4">
      <View className="flex-row items-center justify-between px-0">
        {/* name and desc */}
        <View>
          <Text className="text-lg font-bold">{name}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              color: themeColors.text,
            }}
            className="font-semibold"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* horizontal scroll for each feature group */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        className="overflow-visible py-4"
      >
        {restaurants.map((restaurant, i) => (
          <RestaurantCard restaurant={restaurant} key={i} />
        ))}
      </ScrollView>
    </View>
  );
}
