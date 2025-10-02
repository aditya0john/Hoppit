import { products } from '@/lib/data';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

function FoodItem() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4;
  const itemSpacing = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

  return (
    <View className="flex items-center justify-center">
      <View className="mt-4 w-full rounded-xl bg-[#fCF5E5]/[0.1]">
        <View className="w-full flex-row items-center justify-between rounded-xl bg-[#FCF5E5]/[0.2] p-2">
          <Text className="text-lg font-semibold text-white">Fruits</Text>
          <Ionicons name="chevron-forward-outline" color="#FFFFFF6a" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 8,
            justifyContent: 'flex-start',
          }}>
          {products.fruits.map((data) => (
            <View key={data.id} className="flex flex-col items-center justify-center">
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: itemWidth, margin: 2 }}
                className="h-24 items-center justify-center rounded-xl bg-[#FCF5E5] p-2"></TouchableOpacity>
              <Text className="text-xs font-bold capitalize text-[#FCF5E5]">{data.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-4 w-full rounded-xl bg-[#fCF5E5]/[0.1]">
        <View className="w-full flex-row items-center justify-between rounded-xl bg-[#FCF5E5]/[0.2] p-2">
          <Text className="text-lg font-semibold text-white">Vegetables</Text>
          <Ionicons name="chevron-forward-outline" color="#FFFFFF6a" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 8,
            justifyContent: 'flex-start',
          }}>
          {products.vegetables.map((data) => (
            <View key={data.id} className="flex flex-col items-center justify-center">
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ width: itemWidth, margin: 2 }}
                className="h-24 items-center justify-center rounded-xl bg-[#FCF5E5] p-2"></TouchableOpacity>
              <Text className="text-xs font-bold capitalize text-[#FCF5E5]">{data.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default FoodItem;
