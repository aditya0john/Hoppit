import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import { settingsData } from '@/lib/data';
import { router } from 'expo-router';

export default function Settings() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 items-center justify-center gap-4 bg-[#FFF] p-2" edges={["top", "left", "right"]}>
        <View className="flex w-full flex-row items-center justify-start gap-2 bg-neutral-200/[0.8] rounded-full p-2">
          <Ionicons name="person-circle" size={50} color={"gray"} />
          <View>
            <Text className="text-3xl font-bold text-black/[0.6]">Aditya John</Text>
            <Text className="text-md text-black/[0.6]">useremail@gmail.com</Text>
          </View>
        </View>

        <ScrollView decelerationRate={'fast'} className="w-full flex-1">
          <View className="overflow-hidden bg-neutral-200/[0.6] rounded-3xl">
            {settingsData.General.map((data) => (
              <TouchableOpacity
                key={data.id}
                activeOpacity={0.8}
                onPress={() => router.push(data.href)}>
                <View className="m-1 flex-row items-center justify-between rounded-lg p-2">
                  <View className="flex-row items-center gap-2">
                    <Ionicons name={data.image} size={30} color={"gray"} />
                    <Text className="text-lg capitalize text-black/[0.6]">{data.name}</Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" color="#0000004a" size={20} />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-4 overflow-hidden bg-neutral-200/[0.6] rounded-3xl">
            {settingsData.Account.map((data) => (
              <TouchableOpacity
                key={data.id}
                activeOpacity={0.8}
                onPress={() => router.push(data.href)}>
                <View className="m-1 flex-row items-center justify-between rounded-lg p-2">
                  <View className="flex-row items-center gap-2">
                    <Ionicons name={data.image} size={30} color={"gray"} />
                    <Text className="text-lg capitalize text-black/[0.6]">{data.name}</Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" color="#0000004a" size={20} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
