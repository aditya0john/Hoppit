import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function SettingsLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: 'white' },
                headerTitleAlign: 'center',
            }}
        >
            {/* Delivery */}
            <Stack.Screen
                name="General"
                options={{
                    gestureEnabled: true,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity className='px-2' onPress={() => router.back()}>
                            <Ionicons name='chevron-back' size={20} color={"gray"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => <Ionicons name="cog-outline" size={40} color="gray" />,
                }}
            />

            {/* Checkout */}
            <Stack.Screen
                name="Orders"
                options={{
                    gestureEnabled: true,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity className='px-2' onPress={() => router.back()}>
                            <Ionicons name='chevron-back' size={20} color={"gray"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => <Ionicons name="receipt-outline" size={40} color="gray" />,
                }}
            />
            {/* Category Page */}
            <Stack.Screen
                name="LoginPass"
                options={{
                    gestureEnabled: true,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity className='px-2' onPress={() => router.back()}>
                            <Ionicons name='chevron-back' size={20} color={"gray"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => <Ionicons name="key-outline" size={40} color="gray" />,
                }}
            />

            <Stack.Screen
                name="Complaints"
                options={{
                    gestureEnabled: true,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity className='px-2' onPress={() => router.back()}>
                            <Ionicons name='chevron-back' size={20} color={"gray"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => <Ionicons name="thumbs-down-outline" size={40} color="gray" />,
                }}
            />
            <Stack.Screen
                name="Account"
                options={{
                    gestureEnabled: true,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity className='px-2' onPress={() => router.back()}>
                            <Ionicons name='chevron-back' size={20} color={"gray"} />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => <Ionicons name="person-remove-outline" size={40} color="gray" />,
                }}
            />
        </Stack>
    );
}
