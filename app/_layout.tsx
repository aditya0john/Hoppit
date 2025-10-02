import { Tabs } from 'expo-router';
import '../global.css';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#190D05',
        tabBarIconStyle: { color: '#190D05' },
        tabBarStyle: { backgroundColor: '#FCF5E5', borderTopColor: '#190D05', maxHeight: 70 },
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
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={`${focused ? 'settings' : 'settings-outline'}`}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
