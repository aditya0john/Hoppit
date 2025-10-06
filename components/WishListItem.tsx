import { StoreItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

export default function WishListItem({ products, category }: { products: StoreItem[], category: string }) {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const itemSpacing = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

  let { addItem } = useCartStore();
  let { removeFav } = useWishList();

  return (
    <View className="flex items-center justify-center">
      <View className="mt-2 w-full rounded-xl">
        <View className="flex-row justify-around items-center">
          <View className='w-[36%] h-0 border border-black/[0.2]' />
          <Text className="text-md font-semibold text-black/[0.6] uppercase">{category}</Text>
          <View className='w-[36%] h-0 border border-black/[0.2]' />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 1,
            justifyContent: 'flex-start',
          }}>
          {products.map((data) => (
            <View key={data.id} className="flex flex-col items-center justify-center relative">
              <TouchableOpacity onPress={() => removeFav(data.name)} className='absolute top-1 right-1 z-50'>
                <Ionicons name='heart' size={20} color={"red"} />
              </TouchableOpacity>
              <View
                style={{ width: itemWidth, margin: 2 }}
                className="h-44 items-center rounded-xl bg-[#F6D3D3]/[0.2]">
                <Image source={require("../assets/images/categories/Chips.jpg")}
                  alt="product image"
                  height={20}
                  width={40}
                  resizeMode='cover'
                  className='h-20 w-full rounded-t-xl' />
                <Text className="text-lg font-bold capitalize text-black/[0.6]">{data.name}</Text>
                <Text className="text-xs font-bold capitalize text-yellow-600">{data.price}</Text>
                <View className='flex-row items-center'>
                  <Ionicons name='time-outline' color={"red"} size={12} />
                  <Text className="text-xs font-bold capitalize text-black/[0.6]">{data.time}</Text>
                </View>
                <TouchableOpacity onPress={() => addItem(data)} className='bg-red-200 px-2 py-1 rounded-xl items-center mt-1'>
                  <Text className='text-black/[0.6] text-xs font-bold'>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
