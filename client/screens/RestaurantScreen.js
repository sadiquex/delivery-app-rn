import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

export default function RestaurantScreen() {
  // receive route.params from RestaurantCard
  const { params } = useRoute();
  let restaurant = params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  // when the component mounts, pass the restaurant to redux
  useEffect(() => {
    if (restaurant && restaurant.id) {
      dispatch(setRestaurant({...restaurant}))
    }
  },[])
  
  return (
    <View>
      <StatusBar style="light" />
      {/* cart icon positioned absolute */}
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={restaurant.image} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        {/* details */}
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 p-6"
        >
          <View className="">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>

            {/* other info */}
            <View className="flex-row items-center space-x-1">
              <Icon.Star height={24} width={24} fill={"orange"} />
              <Text className="text-sm">
                <Text className="text-green-700">{restaurant.stars} </Text>
                <Text className="text-gray-700">
                  ({restaurant.reviews} reviews) ~{" "}
                  <Text className="font-semibold">{restaurant.category}</Text>
                </Text>
              </Text>

              {/* address */}
              <Icon.MapPin height={16} width={16} color={"gray"} />
              <Text className="text-gray-700 text-sm">
                {restaurant.address}
              </Text>
            </View>
          </View>

          {/* description */}
          <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
        </View>

        {/* the menu */}
        <View className="pb-36 bg-gray-50">
          <Text className="px-4 py-4 text-2xl">Menu</Text>
          {restaurant.dishes.map((dish, i) => (
            <DishRow dish={dish} key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
