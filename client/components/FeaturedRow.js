import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ featureItem }) {
  const { id, title, description, restaurants } = featureItem;

  return (
    <View className="px-4">
      <View className="flex-row justify-between items-center px-0">
        {/* title and desc */}
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
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
