import CategoryCarousel from '@/components/CategoryCarousel';
import FoodItem from '@/components/FoodItem';
import SearchBar from '@/components/SearchBar';
import { products, stores } from '@/lib/data';
import { StoreItem } from '@/lib/schema';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4;
  const itemSpacing = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;
  const [wishList, setWishList] = useState<StoreItem>(); //send this to zustand

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 bg-[#FFF] p-2" edges={["top", "left", "right"]}>
        <View className='flex-row justify-between items-end p-2'>
          <View className='flex-row'>
            <Image source={require("../assets/images/LOGO2.png")} alt='Hoppit Points' height={20} width={40} resizeMode="contain" className='h-20 w-20' />

            <View className='flex-col items-start justify-end mb-2'>
              <View className='flex-row items-end'>
                <Text className='text-3xl text-[#FFBD00] font-bold'>Hoppit</Text>
                <Text className='text-xs text-yellow-500 font-bold p-1'>in <Text className='text-lg text-red-500'>7</Text> mins</Text>
              </View>

              <Text className='text-xs text-[#6E6E6E]'>Bas ek Hop, aur ghar pe Drop!</Text>
            </View>
          </View>

          <View className='items-end'>
            <View className='flex-row items-center'>
              <Image source={require("../assets/images/HP.png")} alt='Hoppit Points' height={20} width={40} resizeMode='contain' className='h-12 w-12' />
              <Text className='text-red-500 font-mono text-3xl font-extrabold bg-[#F6D3D3]/[0.6] p-1 rounded-lg -ml-1'>20</Text>
            </View>
            <Text className='text-[#6E6E6E] text-md -ml-1'>HopCoins</Text>

          </View>
        </View>


        <ScrollView>
          <View className='flex-row items-center gap-2 mt-2'>
            <TouchableOpacity
              activeOpacity={0.8}
              className='bg-[#F6D3D3]/[0.6] py-1 rounded-lg flex-row items-center justify-start'>
              <Image source={require("../assets/images/location.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10' />
              <View className='flex-row items-center'>
                <View>
                  <Text className='text-red-400 font-bold text-lg capitalize'>Meeting point</Text>
                  <Text className='text-[#6E6E6E]/[0.8] font-sans text-xs -mt-1'>andheri gali, shaitaan moholla</Text>
                </View>
                <Ionicons name='chevron-down' size={14} color={"black"} className='p-1' />
              </View>
            </TouchableOpacity>

            <SearchBar />
          </View>

          <CategoryCarousel />

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

          <FoodItem products={products.fruits} category='Fruits' />
          <FoodItem products={products.vegetables} category='Vegetables' />

          <View style={{ position: "sticky", bottom: 4 }} className='items-center justify-center'>
            <TouchableOpacity
              onPress={() => router.push("/Delivery")}
              activeOpacity={0.6}
              style={{ width: "70%" }}
              className='flex-row items-center justify-center gap-2 bg-neutral-200/[0.6] p-2 rounded-2xl'>
              <Image source={require("../assets/images/categories/Snacks.jpeg")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10 rounded-full bg-black/[0.2]' />
              <View className='flex-row justify-between items-center w-[80%]'>
                <View>
                  <Text className='text-black/[0.4] font-bold text-xs'>Order ID : 900273ASDJNH68</Text>
                  <Text className='text-red-400 font-bold text-md capitalize w-full'>Snacks from Hoppit</Text>
                </View>
                <View className='flex-row gap-4'>
                  <Text className='text-black/[0.4] font-bold text-md'>+2</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      <StatusBar backgroundColor="#C4FFA5" barStyle={"dark-content"} />
    </GestureHandlerRootView>
  );
}
