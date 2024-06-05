import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector(selectCartTotal);

  // do nothing if the cart is empty
  if (cartItems.length === 0) return;

  return (
    <View className="absolute bottom-5 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="mx-5 flex-row items-center justify-between rounded-full px-4 py-3 shadow-lg"
      >
        <View
          className="rounded-full p-2 px-4"
          style={{ backgroundColor: "rgba(255,255,255,.4)" }}
        >
          <Text className="text-lg font-extrabold text-white">
            {cartItems.length}
          </Text>
        </View>

        <Text className="flex-1 text-center text-lg font-extrabold text-white">
          View Cart
        </Text>

        <Text className="text-lg font-extrabold text-white">${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
}
