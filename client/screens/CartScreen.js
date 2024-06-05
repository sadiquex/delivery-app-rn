import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { featured } from "../data";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";
import { useEffect, useState } from "react";

export default function CartScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant?.restaurant);
  const cartItems = useSelector((state) => state.cart?.cartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const deliveryFee = 2;

  // group all elements with the same id into one
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      {/* back btn */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => {
            console.log("back pe");
            navigation.goBack();
          }}
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          className="absolute left-2 top-10 z-10 rounded-full p-1 shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
      </View>
      {/* restarurant details */}
      <View>
        <Text className="text-center text-xl font-extrabold">Your Cart</Text>
        <Text className="text-center text-gray-500">{restaurant?.name}</Text>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.3) }}
        className="flex-row items-center px-4 py-2"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="h-20 w-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      {groupedItems.length === 0 ? (
        <Text>Nothing in cart, Order something</Text>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="pt-5"
        >
          {Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View
                key={key}
                className="mx-2 mb-3 flex-row items-center space-x-3 overflow-auto rounded-full border border-gray-300 bg-white px-4 py-2 shadow"
              >
                <Text className="font-bold" style={{ color: themeColors.text }}>
                  {items.length} x
                </Text>
                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                <Text className="flex-1 font-bold text-gray-700">
                  {dish.name}
                </Text>
                <Text className="text-base font-extrabold">${dish.price}</Text>
                <TouchableOpacity
                  className="rounded-full p-1"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                  onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke={"white"}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      )}

      {/* totals */}
      <View
        className="space-y-4 rounded-t-3xl p-6 px-8"
        style={{ backgroundColor: themeColors.bgColor(0.3) }}
      >
        {/* subtotal */}
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>

        {/* delivery fee */}
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>

        {/* total price */}
        <View className="flex-row justify-between">
          <Text className="font-extrabold text-gray-700">Order Total</Text>
          <Text className="font-extrabold text-gray-700">
            ${deliveryFee + cartTotal}
          </Text>
        </View>

        {/* place order */}
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="rounded-full p-3"
            onPress={() => navigation.navigate("OrderPreparingScreen")}
          >
            <Text className="text-center text-lg font-bold text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
