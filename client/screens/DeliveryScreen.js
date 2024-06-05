import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../data";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => state.restaurant.restaurant);

  const cancelOrder = () => {
    dispatch(emptyCart());
    navigation.navigate("HomeScreen");
  };

  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        className="h-full w-full flex-1"
        initialRegion={{
          //   latitude: restaurant.lat,
          //   longitude: restaurant.lng,
          latitude: 7.94,
          longitude: 1.02,
          latitudeDelta: 0.01, // zoom in level
          longitudeDelta: 0.01, // zoom in level
        }}
        mapType="standard"
      />

      <View className="relative -mt-12 rounded-t-xl bg-white">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg font-semibold text-gray-700">
              Estimated Arrival Time
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20 - 30 mins
            </Text>
            <Text className="mt-2 font-semibold text-gray-700">
              Your order is on its way
            </Text>
          </View>
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className="h-24 w-24"
          />
        </View>
      </View>
      {/* rider info - image, name and icons */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.8) }}
        className="mx-2 my-4 flex-row items-center justify-between gap-2 rounded-full p-2"
      >
        {/* rider image */}
        <View
          className="rounded-full p-1"
          style={{ backgroundColor: "rgba(255,255,255,.4)" }}
        >
          <Image
            source={require("../assets/images/bikeGuy.png")}
            className="h-16 w-16 rounded-full"
          />
        </View>

        {/* name */}
        <View className="flex-1 flex-col justify-center">
          <Text className="text-lg font-bold text-white">Ibrahim Saddik</Text>

          <Text className="font-semibold text-white">Your rider</Text>
        </View>

        {/* icons */}
        <View className="mr-3 flex-row items-center space-x-3">
          <TouchableOpacity className="rounded-full bg-white p-2">
            <Icon.Phone
              fill={themeColors.bgColor(1)}
              strokeWidth={1}
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
          {/* cancel button */}
          <TouchableOpacity className="rounded-full bg-white p-2">
            <Icon.X
              fill={themeColors.bgColor(1)}
              strokeWidth={4}
              stroke={"red"}
              onPress={cancelOrder}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
