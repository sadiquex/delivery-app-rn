import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from "../data";
import { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, i) => (
          <View key={i} className="flex justify-center items-center mr-6">
            <TouchableOpacity
              onPress={() => setActiveCategory(category.name)}
              className={`p-1 rounded-full shadow ${
                activeCategory === category.name
                  ? "bg-orange-400"
                  : "bg-gray-200"
              }`}
            >
              <Image
                source={category.image}
                style={{
                  height: 45,
                  width: 45,
                }}
              />
            </TouchableOpacity>
            <Text
              className={`text-sm ${
                activeCategory === category.name ? "font-semibold" : ""
              }`}
            >
              {category.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
