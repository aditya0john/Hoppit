import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cart() {
    let { cartItems } = useCartStore();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <GestureHandlerRootView>
            <SafeAreaView className={`flex-1 bg-[#FFF] p-2 items-center ${cartItems.length === 0 ? "justify-center" : "justify-start"}`} edges={["left", "right"]}>
                {cartItems.length === 0 ?
                    <View className='flex-row items-center justify-center'>
                        <Text className='text-5xl text-black/[0.4] font-bold'>Empty</Text>
                    </View>
                    :
                    <View className='items-start gap-4 w-full'>
                        <ScrollView contentContainerStyle={{ display: "flex", flexDirection: "column", gap: 10 }} className='h-full w-full'>
                            <CartItem products={cartItems} />

                            <View className='w-full flex-row justify-between bg-neutral-200/[0.6] p-4 rounded-2xl'>
                                <Text className='text-2xl font-semibold text-black/[0.6]'>Coupons</Text>
                                <Ionicons name='chevron-forward' size={30} color={"gray"} />
                            </View>

                            <View className='flex-col gap-4 bg-neutral-200/[0.6] p-4 rounded-2xl w-full mb-10'>
                                <Text className='text-2xl font-bold'>Bill details</Text>

                                <View className='gap-1'>
                                    <View className='flex-row px-2 justify-between'>
                                        <View className='flex-row gap-2'>
                                            <Ionicons name='cash' size={20} color={"gray"} />
                                            <Text className='text-md capitalize'>items Total</Text>
                                        </View>
                                        <Text className='text-black/[0.6]'>Rs {totalPrice}</Text>
                                    </View>
                                    <View className='flex-row px-2 justify-between'>
                                        <View className='flex-row gap-2'>
                                            <Ionicons name='bicycle' size={20} color={"gray"} />
                                            <Text className='text-md capitalize'>Delivery Charges</Text>
                                        </View>
                                        <Text className='text-black/[0.6]'>Rs 14</Text>
                                    </View>
                                    <View className='flex-row px-2 justify-between'>
                                        <View className='flex-row gap-2'>
                                            <Ionicons name='bag' size={20} color={"gray"} />
                                            <Text className='text-md capitalize'>handling Charges</Text>
                                        </View>
                                        <Text className='text-black/[0.6]'>Rs 7</Text>
                                    </View>
                                    <View className='flex-row px-2 justify-between'>
                                        <View className='flex-row gap-2'>
                                            <Ionicons name='pricetag' size={20} color={"gray"} />
                                            <Text className='text-md capitalize'>Offers and Discount</Text>
                                        </View>
                                        <Text className='text-black/[0.6]'>Rs 7</Text>
                                    </View>
                                    <View className='flex-row px-2 justify-between'>
                                        <View className='flex-row gap-2'>
                                            <Ionicons name='rainy' size={20} color={"gray"} />
                                            <Text className='text-md capitalize'>Surge Charges</Text>
                                        </View>
                                        <Text className='text-black/[0.6]'>--</Text>
                                    </View>
                                </View>

                                <View className='h-0 w-full border border-black/[0.2]' />

                                <View className='flex-row justify-between px-2'>
                                    <Text className='text-xl font-bold capitalize'>Grand Total</Text>
                                    <Text className='text-black text-xl font-bold'>{totalPrice + 14}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                }
            </SafeAreaView>

            {cartItems.length > 0 &&
                <View className='bg-[#FFF] flex-row items-center justify-between p-2'>
                    <View className='items-center px-2'>
                        <View className='flex-row items-center gap-2'>
                            <Ionicons name='cash' size={20} color={"gray"} />
                            <Text className='font-bold text-xl text-black/[0.8]'>
                                Pay <Text className=' text-black/[0.6]'>Rs {totalPrice}</Text>
                            </Text>
                        </View>
                        <View className='bg-gray-100 p-1 rounded-xl flex-row gap-2 items-center justify-center'>
                            <Text className='text-md text-blue-600 capitalize'>Cash On Delivery</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => router.push("/Checkout")} activeOpacity={0.6} className='w-52 bg-green-500 p-2 rounded-3xl flex-row items-center justify-center gap-2'>
                        <Text className='text-3xl font-bold text-white'>Checkout</Text>
                        <Ionicons name='chevron-forward-circle-outline' size={24} color={"white"} />
                    </TouchableOpacity>
                </View>}
        </GestureHandlerRootView>
    );
}
