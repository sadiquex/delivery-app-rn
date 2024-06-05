import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categories[0]?._id);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

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
        {categories?.map((category, i) => (
          <View key={i} className="mr-6 flex items-center justify-center">
            <TouchableOpacity
              onPress={() => setActiveCategory(category._id)}
              className={`overflow-hidden rounded-full p-1 shadow ${
                activeCategory === category._id
                  ? "bg-orange-400"
                  : "bg-gray-200"
              }`}
            >
              <Image
                source={{ uri: urlFor(category.image.asset).url() }}
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
