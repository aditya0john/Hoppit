import { GroceryItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

export default function GroceryComponent({ products, category = "" }: { products: GroceryItem[], category?: string }) {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const itemSpacing = 8;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

  let { cartItems, addItem, increaseQty, decreaseQty } = useCartStore();
  let { addFav, wishList } = useWishList();

  function handleCart(data: any) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    addItem(data);
  }
  function handleFav(data: any) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    addFav(data);
  }

  return (
    <View className="flex items-center justify-center">
      <View className="mt-2 w-full rounded-xl">
        {
          category?.length > 0 &&
          <View className="flex-row justify-around items-center">
            <View className='w-[36%] h-0 border border-black/[0.2]' />
            <Text className="text-md font-semibold text-black/[0.6] uppercase">{category}</Text>
            <View className='w-[36%] h-0 border border-black/[0.2]' />
          </View>
        }
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 1,
            gap:2,
            justifyContent: 'flex-start',
          }}>
          {
            products.map((data) => {
              const wishListItem = wishList.find((i) => i.itemName === data.itemName);
              const cartItem = cartItems.find((i) => i.itemName === data.itemName);

              return (
                <View key={data.itemId} className="flex flex-col items-center justify-center relative bg-[#F6D3D3]/[0.2] rounded-2xl ">
                  <TouchableOpacity onPress={() => handleFav(data)} className='absolute top-1 right-1 z-50'>
                    <Ionicons name={`${wishListItem ? "heart" : "heart-outline"}`} size={20} color={"#FF8F94"} />
                  </TouchableOpacity>
                  <View
                    style={{ width: itemWidth, margin: 2 }}
                    className="h-44 items-center">
                    <Image
                      source={data.image}
                      alt="product image"
                      height={20}
                      width={40}
                      resizeMode='contain'
                      className='h-20 w-full rounded-t-xl' />
                    <Text className="text-xs font-bold capitalize text-black/[0.6]" numberOfLines={1}>{data.itemName}</Text>
                    <Text className="text-xs font-bold capitalize text-black/[0.4]">{data.brand}</Text>
                    <Text className="text-xs font-bold capitalize text-yellow-600">Rs {data.price}</Text>

                    {
                      cartItem ?
                        <View className='flex-row items-center justify-center gap-1 bg-green-500 rounded-lg px-1 mt-1'>
                          <TouchableOpacity onPress={() => decreaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                            <Ionicons name='remove' size={16} color={"white"} />
                          </TouchableOpacity>

                          <Text className='text-white font-bold text-lg'>{cartItem.quantity}</Text>

                          <TouchableOpacity onPress={() => increaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                            <Ionicons name='add' size={16} color={"white"} />
                          </TouchableOpacity>
                        </View>

                        :
                        <TouchableOpacity onPress={() => handleCart(data)} className='flex-row bg-green-500/[0.1] p-1 rounded-lg items-center mt-1'>
                          <Text className='text-green-600 font-bold'>ADD</Text><Ionicons name="cart-outline" size={20} color={"#369E59"} />
                        </TouchableOpacity>
                    }
                  </View>
                </View>
              )
            })}
        </View>
      </View>
    </View>
  );
}
