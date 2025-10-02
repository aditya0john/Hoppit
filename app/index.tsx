import FoodItem from '@/components/FoodItem';
import { categories, stores } from '@/lib/data';
import { StoreItem } from '@/lib/schema';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4;
  const itemSpacing = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;
  const [wishList, setWishList] = useState<StoreItem>();

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 bg-[#190D05] p-2">
        <View className="relative">
          <TextInput
            placeholder="HOP-IT KAR"
            className="rounded-xl bg-[#FCF5E5] px-2 py-4 text-black"
            placeholderTextColor={'#0000006a'}
          />
          <Ionicons
            name="search-outline"
            size={30}
            color={'#0000006a'}
            className="absolute right-2 top-2"
          />
        </View>
        <ScrollView>
          <View className="mt-4 rounded-xl bg-[#FCF5E5]/[0.2]">
            <ScrollView
              horizontal
              decelerationRate={'fast'}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: 10,
              }}
              showsVerticalScrollIndicator={false}>
              {categories.map((data) => (
                <TouchableOpacity
                  key={data.id}
                  activeOpacity={0.8}
                  className="flex-col items-center justify-center rounded-full">
                  <Image
                    source={data.image}
                    alt="Category image"
                    height={40}
                    width={40}
                    className="h-20 w-20 rounded-full bg-[#FCF5E5] object-cover"
                    resizeMode="cover"
                  />
                  <Text className="mt-2 text-center text-xs font-bold text-[#FCF5E5]">
                    {data.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {wishList && (
            <View className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FCF5E5]/[0.2]">
              <View className="w-full flex-row items-center justify-between rounded-xl bg-[#FCF5E5]/[0.2] p-2">
                <Text className="text-lg font-semibold text-white">Wish List</Text>
                <Ionicons name="chevron-forward-outline" color="#FFFFFF6a" size={20} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  padding: itemSpacing,
                  justifyContent: 'flex-start',
                }}>
                {stores.map((data) => (
                  <TouchableOpacity
                    key={data.id}
                    activeOpacity={0.8}
                    style={{ width: itemWidth, margin: 2 }}
                    className="h-24 items-center justify-center rounded-xl bg-[#FCF5E5] p-2">
                    <Text className="text-xs font-bold text-[#190D05]">{data.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          
          <View className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FCF5E5]/[0.1]">
            <View className="w-full flex-row items-center justify-between rounded-xl bg-[#FCF5E5]/[0.2] p-2">
              <Text className="text-lg font-semibold text-white">Restaurant near you</Text>
              <Ionicons name="chevron-forward-outline" color="#FFFFFF6a" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: itemSpacing,
                justifyContent: 'flex-start',
              }}>
              {stores.map((data) => (
                <TouchableOpacity
                  key={data.id}
                  activeOpacity={0.8}
                  style={{ width: itemWidth, margin: 2 }}
                  className="h-24 items-center justify-center rounded-xl bg-[#FCF5E5] p-2">
                  <Text className="text-xs font-bold text-[#190D05]">{data.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <FoodItem />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
