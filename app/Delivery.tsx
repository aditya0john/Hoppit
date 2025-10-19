import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import { useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Delivery() {

  const stages = ["Preparing", "Order Packed", "Hopping", "Delivered"];
  let [orderAccepted, setOrderAccepted] = useState(true);
  let [stageReached, setStageReached] = useState(1);

  const mapRef = useRef<any>();
  const navigation = useNavigation();

  const INITIAL_REGION = {
    latitude: 30.29,
    longitude: 77.47,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  }

  useEffect(() => (
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.8} onPress={FocusMap}>
          <Text>Track Order</Text>
        </TouchableOpacity>
      )
    })
  ), [])

  const FocusMap = () => {
    const Order = {
      latitude: 30.29,
      longitude: 77.47,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }
    mapRef.current?.animateCamera({ center: Order, zoom: 15 }, { duration: 1000 });
  }

  const CallHoppitHero = () => {
    Haptics.selectionAsync();
  }

  return (
    <GestureHandlerRootView >
      <SafeAreaView className='flex-1 items-center' edges={["left", "right"]}>
        {/* <Image source={require("../assets/images/map.png")} height={10} width={20} className='w-screen h-[40%]' resizeMode='cover' /> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height: "50%", width: "100%" }}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
          ref={mapRef}
        >
          <Polyline
            coordinates={[
              { latitude: 30.29, longitude: 77.47, },
              { latitude: 30.286, longitude: 77.498, },
            ]}
            strokeColors={["#ff4343"]} // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={4}
          />
          <Marker coordinate={INITIAL_REGION} >
            <Callout>
              <View className='bg-white p-2'>
                <Text className='text-xs'>{Marker.name}</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>

        <ScrollView className='bg-white rounded-t-3xl p-4'>
          <View className={`flex-col items-center gap-2 p-2 rounded-2xl ${orderAccepted ? "bg-green-600 " : "bg-yellow-500"}`}>
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

          <View
            className='flex-row items-center gap-2 mt-4'>
            <Image source={require("../assets/images/categories/Snacks.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-16 w-16 rounded-full bg-black/[0.2]' />
            <View className='flex-row justify-around items-center w-[80%] bg-neutral-200/[0.6] p-2 rounded-2xl'>
              <View>
                <Text className='text-black/[0.4] font-bold text-xs'>Order ID : 900273ASDJNH68</Text>
                <Text className='text-red-400 font-bold text-xl capitalize w-full'>Snacks from Hoppit</Text>
              </View>
              <View className='flex-row gap-4'>
                <View className='w-0 border border-black/[0.2]' />
                <Text className='text-black/[0.4] font-bold text-2xl'>+2</Text>
              </View>
            </View>
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

            <View className='flex-col gap-2 my-4 bg-neutral-200/[0.6] p-2 rounded-2xl'>
              <View
                className='flex-row items-center justify-between'>
                <View className='flex-row items-center gap-2'>
                  <Image source={require("../assets/images/HoppitHero.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-14 w-14 rounded-full bg-white' />
                  <View>
                    <Text className='text-black/[0.4] font-bold text-xs capitalize'>your hoppit hero</Text>
                    <Text className='text-red-400 font-bold text-xl capitalize w-full'>Dhananjay</Text>
                  </View>
                </View>
                <View className='flex-row gap-4'>
                  <TouchableOpacity
                    onPress={CallHoppitHero}
                    activeOpacity={0.6}
                    className='bg-black/[0.1] p-1 rounded-full'>
                    <Ionicons name='call' size={24} color={"#0000004a"} className='p-1' />
                  </TouchableOpacity>
                </View>
              </View>

              <View className='w-full h-0 border border-black/[0.1]' />
              <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/HoppitStore.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-14 w-14 rounded-full bg-white' />
                <View>
                  <Text className='text-black/[0.4] font-bold text-xs capitalize'>store</Text>
                  <Text className='text-red-400 font-bold text-xl w-full'>Hoppit Store</Text>
                </View>
              </View>

              <View className='w-full h-0 border border-black/[0.1]' />

              <View className='flex-row items-center gap-2'>
                <Image source={require("../assets/images/HoppitLocation.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-14 w-14 rounded-full bg-white' />
                <View>
                  <Text className='text-black/[0.4] font-bold text-xs capitalize'>order address</Text>
                  <Text className='text-red-400 font-bold text-xl capitalize w-full'>Meeting point</Text>
                  <Text className='text-[#6E6E6E]/[0.8] font-sans text-xs -mt-1'>andheri gali, shaitaan moholla</Text>
                </View>
              </View>
            </View>
          </View>}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
