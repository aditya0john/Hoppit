import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import { settingsData } from '@/lib/data';
import { router } from 'expo-router';

export default function settings() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 items-center justify-center gap-4 bg-[#FFF] p-2" edges={["top", "left", "right"]}>
        <View className="flex w-full flex-row items-center justify-start gap-2 rounded-full bg-[#F6D3D3]/[0.6] p-2">
          <Image
            source={require('../../assets/images/icon.png')}
            alt="Profile photo"
            height={80}
            width={80}
            className="h-20 w-20 rounded-full object-cover"
          />
          <View>
            <Text className="text-3xl font-bold text-red-500/[0.8]">Aditya John</Text>
            <Text className="text-md text-black/[0.6]">useremail@gmail.com</Text>
          </View>
        </View>

        <ScrollView decelerationRate={'fast'} className="w-full flex-1">
          <View className="overflow-hidden rounded-3xl bg-[#F6D3D3]/[0.4]">
            {settingsData.General.map((prod) => (
              <TouchableOpacity
                key={prod.id}
                activeOpacity={0.8}
                onPress={() => router.push(prod.href)}>
                <View className="m-1 flex-row items-center justify-between rounded-lg p-2">
                  <View className="flex-row items-center gap-2">
                    <Image
                      source={require('../../assets/images/icon.png')}
                      alt="Profile photo"
                      height={30}
                      width={30}
                      className="h-10 w-10 rounded-xl object-cover"
                    />
                    <Text className="text-lg capitalize text-black/[0.6]">{prod.name}</Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" color="#0000004a" size={20} />
                </View>
                <View className="h-0 w-full border border-black/[0.1]" />
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-4 overflow-hidden rounded-3xl bg-[#F6D3D3]/[0.4]">
            {settingsData.Account.map((prod) => (
              <TouchableOpacity
                key={prod.id}
                activeOpacity={0.8}
                onPress={() => router.push(prod.href)}>
                <View className="m-1 flex-row items-center justify-between rounded-lg p-2">
                  <View className="flex-row items-center gap-2">
                    <Image
                      source={require('../../assets/images/icon.png')}
                      alt="Profile photo"
                      height={30}
                      width={30}
                      className="h-10 w-10 rounded-xl object-cover"
                    />
                    <Text className="text-lg capitalize text-black/[0.6]">{prod.name}</Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" color="#0000004a" size={20} />
                </View>
                <View className="h-0 w-full border border-black/[0.1]" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
