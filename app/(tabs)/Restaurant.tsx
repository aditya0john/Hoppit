import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export default function Restaurant() {
  const stages = ["Order Packed", "Hoppit", "Delivered"];
  let [stageReached, setStageReached] = useState(0);

  return (
    <GestureHandlerRootView >
      <View className='flex-1'>
        <Image source={require("../../assets/images/map.png")} height={10} width={20} className='w-screen h-[50%]' resizeMode='cover' />
        <ScrollView className='bg-white rounded-t-3xl -mt-6 p-4'>
          <View className='bg-green-600 flex-col items-center gap-2 p-2 rounded-3xl'>
            <View className='flex-row items-center justify-around w-full'>
              <Text className='text-2xl text-white font-bold'>ON THE WAY</Text>
              <View className='flex-row items-center border border-white px-1 rounded-xl'>
                <Ionicons name='time' size={20} color={"white"} />
                <Text className='text-lg text-white font-bold'>10 Min</Text>
              </View>
            </View>
            <Text className='text-md text-white/[0.8] font-bold bg-white/[0.2] p-2 rounded-xl'>On time | arriving by 9:40 AM</Text>
          </View>

          <View className='flex-row justify-around mt-6'>
            {stages.map((stage, i) => (
              <View key={i}>
                <View className='flex-col gap-2 items-center'>
                  <Text className={`text-xl font-bold ${stageReached >= i ? "text-black/[0.8]" : "text-black/[0.2]"} `}>{stage}</Text>
                  <View className={`h-2 w-24 rounded-full ${stageReached >= i ? "bg-black/[0.4]" : "bg-black/[0.1]"}`} />
                </View>
              </View>
            ))}
          </View>

          <View className='flex-col gap-4 mt-6'>
            <TouchableOpacity
              activeOpacity={0.8}
              className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <Image source={require("../../assets/images/Hoppit.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-24 w-24 rounded-full' />
                <View>
                  <Text className='text-black/[0.4] font-bold text-md -mt-1'>your hoppit hero</Text>
                  <Text className='text-red-400 font-bold text-3xl capitalize w-full'>Dhananjay</Text>
                </View>
              </View>
              <View className='flex-row gap-4'>
                <Ionicons name='call' size={30} color={"#0000004a"} className='p-1' />
                <Ionicons name='chatbox' size={30} color={"#0000004a"} className='p-1' />
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              className='flex-row items-center'>
              <Image source={require("../../assets/images/restaurant.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-24 w-24 rounded-full' />
              <View>
                <Text className='text-black/[0.4] font-bold text-md -mt-1'>restaurant</Text>
                <Text className='text-red-400 font-bold text-3xl w-full'>PIZZA HUT</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className='flex-row items-center'>
              <Image source={require("../../assets/images/location.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-24 w-24 rounded-full' />
              <View>
                <Text className='text-black/[0.4] font-bold text-md -mt-1'>your address</Text>
                <Text className='text-red-400 font-bold text-3xl capitalize w-full'>Meeting point</Text>
                <Text className='text-[#6E6E6E]/[0.8] font-sans text-xs -mt-1 '>andheri gali, shaitaan moholla</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </GestureHandlerRootView>

  );
}
