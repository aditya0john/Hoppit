import CategoryCarousel from '@/components/CategoryCarousel';
import FoodItem from '@/components/FoodItem';
import SearchBar from '@/components/SearchBar';
import { products, stores } from '@/lib/data';
import { StoreItem } from '@/lib/schema';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
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
      <SafeAreaView className="flex-1 bg-[#FFF] p-2" edges={["top","left","right"]}>
        <View className='flex-row justify-between items-center p-2'>
           <View>
              <View style={{alignItems:"flex-end"}} className='flex-row relative'>
               <Image source={require("../assets/images/LOGO.png")} alt='Hoppit Points' height={20} width={40} resizeMode="contain" className='h-20 w-20'/>
                <Text className='text-xs text-red-500/[0.8] p-1 absolute right-8 bottom-1'>in <Text className='text-lg'>7</Text> mins</Text>
              </View>
                <Text className='text-xs text-black/[0.6] -mt-2'>Bas ek Hop, aur ghar pe Drop!</Text>
           </View>

          <View className='flex-row items-center bg-[#F6D3D3]/[0.2] p-1 rounded-lg'>
               <Image source={require("../assets/images/HP.png")} alt='Hoppit Points' height={20} width={40} resizeMode='contain' className='h-12 w-12'/>
              <Text className='text-red-500 font-mono text-3xl font-extrabold'>20</Text>
          </View>
        </View>

     
        <ScrollView>
          <View className='flex-row items-center justify-start'>
            <Image source={require("../assets/images/location.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-8 w-8'/>
            <Text className='text-black/[0.8] font-sans text-lg'>Meeting point, aa gya bas mein</Text>
          </View>

          <SearchBar/>
          <CategoryCarousel/>

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

         
          <FoodItem products={products.fruits} category='Fruits'/>
          <FoodItem products={products.vegetables} category='Vegetables'/>
        </ScrollView>
      </SafeAreaView>

    </GestureHandlerRootView>
  );
}
