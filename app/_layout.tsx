import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import useCachedResources from '@/store/useCachedResources';

export default function RootLayout() {
  const isReady = useCachedResources();

  if (!isReady) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTitleAlign: 'center',
      }}
    >
      {/* Home Page */}
      <Stack.Screen
        name="(tabs)"
        options={{
          gestureEnabled: false,
          title: "Home",
          headerShown: false, // Tabs are hidden if you still want a home tab
        }}
      />

      <Stack.Screen
        name="settings"
        options={{
          gestureEnabled: false,
          title: "settings",
          headerShown: false, // Tabs are hidden if you still want a home tab
        }}
      />

      {/* Delivery */}
      <Stack.Screen
        name="Delivery"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity className='px-2' onPress={() => router.back()}>
              <Ionicons name='chevron-back' size={20} color={"gray"} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Ionicons name="bicycle" size={40} color="gray" />,
        }}
      />

      {/* Checkout */}
      <Stack.Screen
        name="Checkout"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity className='px-2' onPress={() => router.back()}>
              <Ionicons name='chevron-back' size={20} color={"gray"} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Ionicons name="card-outline" size={40} color="gray" />,
        }}
      />

      {/* Category Page */}
      <Stack.Screen
        name="CategoryPage/[Category]"
        options={{
          title: 'Categories',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity className='px-2' onPress={() => router.back()}>
              <Ionicons name='chevron-back' size={20} color={"gray"} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Ionicons name="grid" size={40} color="gray" />,
        }}
      />

      {/* Search Page*/}
      <Stack.Screen
        name="SearchPage"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity className='px-2' onPress={() => router.back()}>
              <Ionicons name='close' size={20} color={"gray"} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Ionicons name="search" size={40} color="gray" />,
        }}
      />

    </Stack>
  );
}
