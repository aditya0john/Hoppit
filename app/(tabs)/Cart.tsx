import CartItem from '@/components/CartItem';
import RadioGroup from '@/components/RadioGroup';
import { useCartStore } from '@/store/useCartStore';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type PaymentKey = "upi" | "card" | "cod";

export default function Cart() {
    let { cartItems } = useCartStore();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const options = [
        { key: "upi", label: "UPI", subtitle: "Pay using UPI - ID", },
        { key: "card", label: "Card", subtitle: "Visa / MasterCard / Amex / Credit / Debit" },
        { key: "cod", label: "Cash on delivery", subtitle: "Pay at delivery" },
    ] as const;

    const [method, setMethod] = useState<PaymentKey | null>("upi");


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

                            <View className='flex-col gap-4 bg-neutral-200/[0.6] p-4 rounded-2xl w-full'>
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

                            <View className='bg-neutral-200/[0.6] flex-row items-center justify-between gap-2 p-4 rounded-2xl w-full'>
                                <View>
                                    <Text className='text-lg font-bold'>Delivery Address</Text>
                                    <View>
                                        <Text className='text-md text-black/[0.8] font-bold capitalize'>Meeting point</Text>
                                        <Text className='text-xs text-black/[0.6] capitalize'>andheri gali, shaitan mohalla, kabristan ke paas</Text>
                                    </View>
                                </View>
                                <Text className='text-xs text-blue-600 capitalize'>change address</Text>
                            </View>

                            <View className='flex-col gap-4 bg-neutral-200/[0.6] p-4 rounded-2xl w-full mb-10'>
                                <Text className='text-2xl font-bold'>Payment options</Text>
                                <RadioGroup onChange={(e) => setMethod(e)} value={method} options={options} />

                                {(method == "upi" || method == "card") &&
                                    <View className="relative flex-row items-center w-[100%]">
                                        <TextInput
                                            placeholder={`Enter ${method} details`}
                                            style={{ height: 42 }}
                                            className="rounded-xl bg-[#F6D3D3]/[0.6] pl-7 text-black text-lg w-full"
                                            placeholderTextColor={'#0000008a'} />
                                    </View>
                                }
                            </View>
                        </ScrollView>
                    </View>
                }
            </SafeAreaView>

            {cartItems.length > 0 &&
                <View className='bg-[#FFF] flex-row items-center justify-between p-2'>
                    <View className='items-center px-2 w-52'>
                        <View className='flex-row items-center gap-2'>
                            <Ionicons name='cash' size={20} color={"gray"} />
                            <Text className='font-bold text-xl text-black/[0.8]'>
                                Pay <Text className=' text-black/[0.6]'>Rs {totalPrice}</Text>
                            </Text>
                        </View>
                        <View className='bg-gray-100 p-2 rounded-xl flex-row gap-2 items-center justify-center w-full'>
                            <Text className='text-xs text-blue-600 uppercase'>{method}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => router.push("/Checkout")} activeOpacity={0.6} className='w-52 bg-green-500 p-2 rounded-3xl flex-row items-center justify-center'>
                        <Text className='text-3xl font-bold text-white'>Place Order</Text>
                        <Ionicons name='chevron-forward-outline' size={24} color={"white"} />
                    </TouchableOpacity>
                </View>}
        </GestureHandlerRootView>
    );
}
