import { Tabs } from 'expo-router';
import '../global.css';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarIconStyle: { color: '#190D05' },
        tabBarStyle: { backgroundColor: '#FCF5E5', borderTopWidth: 0, maxHeight: 70 },
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
      <StatusBar backgroundColor="#C4FFA5" barStyle={"dark-content"} />
    </Tabs>
  );
}
