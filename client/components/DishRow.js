import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import {
  addToCart,
  removeFromCart,
  selectCartItemById,
  selectItemById,
} from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../sanity";

export default function DishRow({ dish }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const totalItems = useSelector((state) => selectCartItemById(state, dish._id));
  const cartItem = useSelector((state) => selectItemById(state, dish._id));

  const handleIncrease = () => {
    dispatch(addToCart({ ...dish }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: dish._id }));
  };

  return (
    <View className="mx-2 mb-3 flex-row items-center rounded-3xl bg-white p-3 shadow-2xl">
      <Image
        className="overflow-hidden rounded-3xl"
        style={{
          height: 100,
          width: 100,
        }}
        source={{ uri: urlFor(dish.image.asset).url() }}
      />

      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{dish.name}</Text>
          <Text className="text-gray-700">{dish.description}</Text>
        </View>

        <View className="flex-row items-center justify-between pl-3">
          <Text className="text-lg font-bold text-gray-700">${dish.price}</Text>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              className="rounded-full p-1"
              style={{
                backgroundColor:
                  cartItems.length === 0 ? "lightgray" : themeColors.bgColor(1),
              }}
              onPress={handleDecrease}
              disabled={cartItems.length === 0}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                color={"white"}
              />
            </TouchableOpacity>

            {/* no of items in cart */}
            <Text className="px-3">{cartItem?.length || 0}</Text>

            <TouchableOpacity
              className="rounded-full p-1"
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={handleIncrease}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
