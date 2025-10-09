import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import '../../global.css';

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
                name="Restaurant"
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
                name="Settings"
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
