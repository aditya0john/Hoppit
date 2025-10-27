import { settingsData } from '@/lib/data';
import { useClerk, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { user } = useUser()
  const { signOut } = useClerk()

  // console.log("user", user);

  const handleSignOut = async () => {
    try {
      await signOut();
      Linking.openURL(Linking.createURL('/'));
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 items-center justify-center gap-4 bg-[#FFF] p-2" edges={["top", "left", "right"]}>
        <View className="flex w-full flex-row items-center justify-start gap-2 bg-neutral-200/[0.8] rounded-full p-2">
          <Image src={user?.imageUrl} alt='image' height={50} width={50} className='rounded-full' resizeMode='contain' />
          {/* <Ionicons name="person-circle" size={50} color={"gray"} /> */}
          <View >
            <Text className="text-3xl font-bold text-black/[0.6]" numberOfLines={1}>{user?.firstName} {user?.lastName}</Text>
            <Text className="text-md text-black/[0.6]">{user?.emailAddresses[0].emailAddress}</Text>
          </View>
        </View>

        <ScrollView decelerationRate={'fast'} className="w-full flex-1">
          <View className="overflow-hidden bg-neutral-200/[0.6] rounded-2xl">
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

          <View className="mt-4 overflow-hidden bg-neutral-200/[0.6] rounded-2xl">
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

          <View className='w-full'>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleSignOut}
              className='bg-red-200 border border-red-400 p-2 items-center rounded-2xl mt-4'>
              <Text className='text-red-500 text-3xl font-bold'>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
