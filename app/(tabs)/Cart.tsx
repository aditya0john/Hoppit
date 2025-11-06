import CartItem from '@/components/CartItem';
import RadioGroup from '@/components/RadioGroup';
import { useCartStore } from '@/store/useCartStore';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type PaymentKey = "upi" | "card" | "cod";

export default function Cart() {
    let { cartItems } = useCartStore();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const options = [
        { key: "upi", label: "UPI", subtitle: "Pay using UPI - ID", icon: "cash" },
        { key: "card", label: "Card", subtitle: "Visa / MasterCard / Amex / Credit / Debit", icon: "card" },
        { key: "cod", label: "Cash on delivery", subtitle: "Pay at delivery", icon: "wallet" },
    ] as const;

    const BillCharges = [
        { icon: "cash-outline", label: "items Total", amount: totalPrice },
        { icon: "bicycle", label: "Delivery Charges", amount: 14 },
        { icon: "bag-outline", label: "handling Charges", amount: 7 },
        { icon: "pricetag-outline", label: "Offers and Discount", amount: -7 },
        { icon: "thunderstorm-outline", label: "Surge Charges", amount: 0 },
        { icon: "rainy-outline", label: "Discount", amount: 14 },
    ]

    const [method, setMethod] = useState<PaymentKey | null>("upi");


    return (
        <GestureHandlerRootView>
            <SafeAreaView
                className={`flex-1 bg-[#FFF] p-2 items-center ${cartItems.length === 0 ? "justify-center" : "justify-start"}`}
                edges={["left", "right"]}
            >
                {cartItems.length === 0 ?
                    <View className='flex-row items-center justify-center'>
                        <Text className='text-5xl text-black/[0.4] font-bold'>Empty</Text>
                    </View>
                    :
                    <View className='items-start gap-4 w-full'>
                        <ScrollView contentContainerStyle={{ display: "flex", flexDirection: "column", gap: 10 }} className='h-full w-full'>
                            <CartItem products={cartItems} />

                            <View className='w-full flex-row justify-between bg-[#F6D3D3]/[0.6] p-4 rounded-2xl'>
                                <View className='flex-row gap-2 items-center'>
                                    <Ionicons name='bicycle-outline' color={"red"} size={26} />
                                    <Text className='text-2xl text-red-500 font-semibold'>Delivery Time</Text>
                                </View>
                                <View className='flex-row items-center gap-1'>
                                    <Ionicons name='time-outline' color={"red"} size={22} />
                                    <Text className="text-xl font-bold capitalize text-red-500">7-10 mins</Text>
                                </View>
                            </View>


                            <View className='w-full flex-row justify-between bg-neutral-200/[0.6] p-4 rounded-2xl'>
                                <View className='flex-row gap-2'>
                                    <Ionicons name='ticket-outline' size={26} color={"gray"} />
                                    <Text className='text-2xl text-black/[0.6] font-semibold'>Coupons</Text>
                                </View>
                                <Ionicons name='chevron-forward' size={30} color={"gray"} />
                            </View>

                            <View className='flex-col gap-4 bg-neutral-200/[0.6] p-4 rounded-2xl w-full'>
                                <Text className='text-2xl font-bold'>Bill details</Text>

                                <View className='gap-1'>
                                    {BillCharges.map((charge, i) => (
                                        <View key={i} className='flex-row px-2 justify-between'>
                                            <View className='flex-row gap-2'>
                                                <Ionicons name={charge.icon} size={20} color={"gray"} />
                                                <Text className='text-md text-neutral-600 capitalize'>{charge.label}</Text>
                                            </View>
                                            <Text className='text-neutral-600'>{charge.amount == 0 ? "--" : `Rs ${charge.amount}`}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View className='h-0 w-full border border-black/[0.2]' />

                                <View className='flex-row justify-between px-2'>
                                    <Text className='text-2xl text-neutral-600 font-bold capitalize'>Grand Total</Text>
                                    <Text className='text-2xl text-red-500 font-bold'>Rs {totalPrice + 14}</Text>
                                </View>
                            </View>

                            <View className='bg-neutral-200/[0.6] gap-4 p-4 rounded-2xl w-full'>
                                <Text className='text-2xl font-bold'>Delivery Address</Text>
                                <View className='flex-row justify-between items-center'>
                                    <View>
                                        <Text className='text-lg text-neutral-600 font-bold capitalize'>Vikasnagar</Text>
                                        <Text className='text-xs text-neutral-600 tracking-tight capitalize'>mandi chowk, near kotwali</Text>
                                    </View>
                                    <Text className='text-xs text-blue-600 capitalize'>change address</Text>
                                </View>
                            </View>


                            <View className='flex-col gap-4 bg-neutral-200/[0.6] p-4 rounded-2xl w-full mb-10'>
                                <Text className='text-2xl font-bold'>Payment options</Text>
                                <RadioGroup onChange={(e) => setMethod(e)} value={method} options={options} />
                            </View>
                        </ScrollView>
                    </View>
                }
            </SafeAreaView>

            {cartItems.length > 0 &&
                <View className='bg-[#FFF] flex-row items-center justify-between p-2'>
                    <View className='items-center px-2'>
                        <View className='flex-row items-center gap-2'>
                            <Text className='font-bold text-xl text-black/[0.8]'>
                                Pay <Text className=' text-red-500'>Rs {totalPrice}</Text>
                            </Text>
                        </View>
                        <View className='bg-neutral-200/[0.6] p-2 rounded-xl flex-row gap-2 items-center justify-center'>
                            <Ionicons name='cash' size={20} color={"gray"} />
                            <Text className='text-xs text-blue-600 uppercase'>{method}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => router.push("/Checkout")} activeOpacity={0.6} className='bg-red-500 p-2 rounded-xl flex-row gap-2 items-center justify-center'>
                        <Image source={require("@/assets/images/LOGO2.png")} alt='Hoppit-LOGO' height={20} width={40} resizeMode="contain" className='h-10 w-10' />
                        {/* <Ionicons name='bag-check' size={30} color={"white"} /> */}
                        <Text className='text-3xl font-bold text-white'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            }
        </GestureHandlerRootView>
    );
}
