import CategoryCarousel from '@/components/CategoryCarousel';
import FoodItem from '@/components/FoodItem';
import SearchBar from '@/components/SearchBar';
import WishListItem from '@/components/WishListItem';
import { products } from '@/lib/data';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const OngoingOrders = [{
  orderId: "900273ASDJNH68",
  name: "Snacks"
}, {
  orderId: "900273ASDJNH68",
  name: "Soft Drink"
}, {
  orderId: "900273ASDJNH68",
  name: "Biryani"
},];

export default function Index() {
  const [showAllOrders, setShowAllOrders] = useState(false);
  const { wishList } = useWishList(); //send this to zustand

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 bg-[#FFF] p-2" edges={["top", "left", "right"]} >
        <View className='flex-row justify-between items-end p-2'>
          <View className='flex-row'>
            <Image source={require("../../assets/images/LOGO2.png")} alt='Hoppit-LOGO' height={20} width={40} resizeMode="contain" className='h-20 w-20' />

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
              <Image source={require("../../assets/images/HP.png")} alt='Hoppit-Points' height={20} width={40} resizeMode='contain' className='h-12 w-12' />
              <View className='bg-[#F6D3D3]/[0.6] p-1 rounded-lg -ml-1 items-center'>
                <Text className='text-red-500 text-3xl font-mono text font-extrabold'>20</Text>
                <Text className='text-[#6E6E6E] text-xs'>HopCoins</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView>
          <View className='flex-row items-center gap-2 mt-2'>
            <TouchableOpacity
              onPress={() => router.push("/SearchPage")}
              activeOpacity={0.8}
              className='bg-[#F6D3D3]/[0.6] py-1 rounded-xl flex-row items-center justify-start'>
              <Image source={require("../../assets/images/location.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10' />
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

          {wishList.length > 0 && <WishListItem category='your wishlist' products={wishList} />}

          <FoodItem products={products.fruits} category='Fruits' />
          <FoodItem products={products.vegetables} category='Vegetables' />
        </ScrollView>


        <View className='flex-row items-center justify-center gap-2'>
          {
            showAllOrders ?
              <View className='gap-4'>
                {
                  OngoingOrders.map((order, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => router.push("/Delivery")}
                      activeOpacity={0.6}
                      style={{ width: "60%" }}
                      className='flex-row items-center justify-center gap-2 bg-neutral-200/[0.6] p-2 rounded-2xl'>
                      <Image source={require("../../assets/images/categories/Snacks.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10 rounded-full bg-black/[0.2]' />
                      <View className='w-[80%]'>
                        <Text className='text-black/[0.4] font-bold text-xs'>Order ID : {order.orderId}</Text>
                        <Text className='text-red-400 font-bold text-md capitalize w-full'>{order.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                }
              </View>
              :
              <TouchableOpacity
                onPress={() => router.push("/Delivery")}
                activeOpacity={0.6}
                style={{ width: "60%" }}
                className='flex-row items-center justify-center gap-2 bg-neutral-200/[0.6] p-2 rounded-2xl'>
                <Image source={require("../../assets/images/categories/Snacks.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10 rounded-full bg-black/[0.2]' />
                <View className='w-[80%]'>
                  <Text className='text-black/[0.4] font-bold text-xs'>Order ID : 900273ASDJNH68</Text>
                  <Text className='text-red-400 font-bold text-md capitalize w-full'>Snacks from Hoppit</Text>
                </View>
              </TouchableOpacity>
          }
          <TouchableOpacity
            onPress={() => setShowAllOrders(!showAllOrders)}
            activeOpacity={0.6}
            className='flex-row items-center justify-center gap-2 bg-neutral-200/[0.6] p-2 rounded-2xl h-full'>
            <View className='flex-row gap-4'>
              <Text className='text-black/[0.4] font-semibold text-xl'>{showAllOrders ? "Collapse" : "+1"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <StatusBar backgroundColor="#C4FFA5" barStyle={"dark-content"} />
    </GestureHandlerRootView>
  );
}
