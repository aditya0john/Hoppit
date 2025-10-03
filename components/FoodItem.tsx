import { StoreItem } from '@/lib/schema';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';


function FoodItem({products, category}: {products : StoreItem[], category : string}) {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4;
  const itemSpacing = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

  return (
    <View className="flex items-center justify-center">
      <View className="mt-2 w-full rounded-xl">
        <View className="flex-row justify-between items-center">
          <View className='w-[36%] h-0 border border-black/[0.4]'/>
          <Text className="text-lg font-semibold text-black/[0.6]">{category}</Text>
          <View className='w-[36%] h-0 border border-black/[0.4]'/>          
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 8,
            justifyContent: 'flex-start',
          }}>
          {products.map((data) => (
            <View key={data.id} className="flex flex-col items-center justify-center">
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: itemWidth, margin: 2 }}
                className="h-36 items-center rounded-xl bg-[#F6D3D3]/[0.2]">
              <Image source={require("../assets/images/categories/Chips.jpg")}
                alt="product image"
                height={20}
                width={40}
                resizeMode='cover'
                className='h-20 w-full rounded-t-xl'/>
              <Text className="text-lg font-bold capitalize text-black/[0.6]">{data.name}</Text>
              <View className='flex-row items-center'>
                <Ionicons name='time-outline' color={"red"} size={12}/>
                <Text className="text-xs font-bold capitalize text-black/[0.6]">{data.time}</Text>
              </View>
                </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default FoodItem;
