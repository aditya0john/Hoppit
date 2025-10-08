import { Ionicons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import '../global.css';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: "#6E6E6E8a",
        tabBarIconStyle: { color: '#190D05' },
        tabBarStyle: { backgroundColor: '#F6D3D34a', borderTopWidth: 0, maxHeight: 70 },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={`${focused ? 'home' : 'home-outline'}`} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/Restaurant"
        options={{
          title: 'Restaurant',
          href: null,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={`${focused ? 'restaurant' : 'restaurant-outline'}`}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          headerTitleStyle: { color: "gray", fontSize: 24 },
          headerStyle: { backgroundColor: "white", height: 100 },
          headerShown: true,
          headerTitle: () => (
            <Ionicons
              className='w-full'
              name='cart-outline'
              size={40}
              color={"gray"}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={`${focused ? 'cart' : 'cart-outline'}`}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/settings"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={`${focused ? 'person-circle' : 'person-circle-outline'}`}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Delivery"
        options={{
          headerStyle: { backgroundColor: "white", height: 100 },
          href: null,
          headerShown: true,
          headerLeft: () => (<TouchableOpacity className='px-2' onPress={() => router.push("/")}><Ionicons name='chevron-back' size={20} color={"gray"} /></TouchableOpacity>),
          headerTitle: () => (
            <Ionicons
              name='bicycle'
              size={40}
              color={"gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Checkout"
        options={{
          headerStyle: { backgroundColor: "white", height: 100 },
          href: null,
          headerShown: true,
          headerLeft: () => (<TouchableOpacity className='px-2' onPress={() => router.push("/Cart")}><Ionicons name='chevron-back' size={20} color={"gray"} /></TouchableOpacity>),
          headerTitle: () => (
            <Ionicons
              name='card-outline'
              size={40}
              color={"gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CategoryPage/[Category]"
        options={{
          title: "Categories",
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
