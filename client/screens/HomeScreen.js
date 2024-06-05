import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import { featured } from "../data";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />

      {/* search bar */}
      <View className="flex-row items-center space-x-2 p-4">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={24} width={24} stroke={"gray"} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke={"gray"} />
            <Text className="text-gray-600">East Legon</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>

      {/* main content area */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((featureItem, i) => (
            <FeaturedRow key={i} featureItem={featureItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
