import { Tabs } from 'expo-router';
import '../global.css';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor:"#6E6E6E8a",
        tabBarIconStyle: { color: '#190D05' },
        tabBarStyle: { backgroundColor: '#F6D3D3', borderTopWidth: 0, maxHeight: 70 },
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
    </Tabs>
  );
}
