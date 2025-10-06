import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import MapView , {PROVIDER_GOOGLE} from "react-native-maps"

export default function Delivery() {
  const stages = ["Preparing", "Order Packed", "Hopping", "Delivered"];
  let [orderAccepted, setOrderAccepted] = useState(true);
  let [stageReached, setStageReached] = useState(1);

  return (
    <GestureHandlerRootView >
      <View className='flex-1'>
        <Image source={require("../assets/images/map.png")} height={10} width={20} className='w-screen h-[50%]' resizeMode='cover' />
        {/* <MapView   provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}></MapView> */}

        <ScrollView className='bg-white rounded-t-3xl -mt-6 p-4'>
          <View
            className='flex-row items-center gap-2'>
            <Image source={require("../assets/images/categories/Snacks.jpeg")} alt='Location' height={20} width={40} resizeMode="contain" className='h-16 w-16 rounded-full bg-black/[0.2]' />
            <View className='flex-row justify-around items-center w-[80%] bg-neutral-200/[0.6] p-2 rounded-2xl'>
              <View>
                <Text className='text-black/[0.4] font-bold text-xs'>Order ID : 900273ASDJNH68</Text>
                <Text className='text-red-400 font-bold text-2xl capitalize w-full'>Snacks from Hoppit</Text>
              </View>
              <View className='flex-row gap-4'>
                <View className='w-0 border border-black/[0.2]' />
                <Text className='text-black/[0.4] font-bold text-2xl'>+2</Text>
              </View>
            </View>
          </View>

          <View className={`flex-col items-center gap-2 p-2 rounded-2xl mt-4 ${orderAccepted ? "bg-green-600 " : "bg-yellow-500"}`}>
            {orderAccepted ? <View className='flex-col gap-4 items-center'>
              <View className='flex-row items-center justify-between w-full px-2'>
                <Text className='text-2xl text-white font-bold'>ON THE WAY</Text>
                <View className='flex-row items-center border border-white px-1 rounded-xl'>
                  <Ionicons name='time' size={20} color={"white"} />
                  <Text className='text-lg text-white font-bold'>10 Min</Text>
                </View>
              </View>
              <Text className='text-md text-white/[0.8] font-bold bg-white/[0.2] p-2 rounded-xl'>On time | arriving by 9:40 AM</Text>
            </View>
              :
              <View>
                <Text className='text-2xl text-white font-bold'>ORDER WAITING</Text>
              </View>}
          </View>

          {orderAccepted && <View>
            <View className='flex-row justify-around mt-4 bg-neutral-200/[0.6] p-4 rounded-2xl'>
              {stages.map((stage, i) => (
                <View key={i}>
                  <View className='flex-col gap-2 items-center'>
                    <Text className={`text-md font-bold ${stageReached >= i ? "text-red-400/[0.8]" : "text-red-400/[0.2]"} `}>{stage}</Text>
                    <View className={`h-2 w-20 rounded-full ${stageReached >= i ? "bg-red-500/[0.8]" : "bg-red-500/[0.1]"}`} />
                  </View>
                </View>
              ))}
            </View>

            <View className='flex-col gap-4 my-4 bg-neutral-200/[0.6] p-2 rounded-2xl'>
              <View
                className='flex-row items-center justify-between'>
                <View className='flex-row items-center gap-2'>
                  <Image source={require("../assets/images/Hoppit.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-16 w-16 rounded-full bg-white' />
                  <View>
                    <Text className='text-black/[0.4] font-bold text-xs capitalize'>your hoppit hero</Text>
                    <Text className='text-red-400 font-bold text-2xl capitalize w-full'>Dhananjay</Text>
                  </View>
                </View>

                <View className='flex-row gap-4'>
                  <TouchableOpacity activeOpacity={0.6} className='bg-black/[0.1] p-1 rounded-full'>
                    <Ionicons name='call' size={30} color={"#0000004a"} className='p-1' />
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.6} className='bg-black/[0.1] p-1 rounded-full'>
                    <Ionicons name='chatbox' size={30} color={"#0000004a"} className='p-1' />
                  </TouchableOpacity>

                </View>
              </View>

              <View className='w-full h-0 border border-black/[0.1]' />

              <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/HoppitStore.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-16 w-16 rounded-full bg-white' />
                <View>
                  <Text className='text-black/[0.4] font-bold text-xs capitalize'>store</Text>
                  <Text className='text-red-400 font-bold text-2xl w-full'>Hoppit Store</Text>
                </View>
              </View>

              <View className='w-full h-0 border border-black/[0.1]' />

              <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/HoppitLocation.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-16 w-16 rounded-full bg-white' />
                <View>
                  <Text className='text-black/[0.4] font-bold text-xs capitalize'>order address</Text>
                  <Text className='text-red-400 font-bold text-2xl capitalize w-full'>Meeting point</Text>
                  <Text className='text-[#6E6E6E]/[0.8] font-sans text-xs -mt-1'>andheri gali, shaitaan moholla</Text>
                </View>
              </View>
            </View>
          </View>}
        </ScrollView>
      </View>
    </GestureHandlerRootView>

  );
}
