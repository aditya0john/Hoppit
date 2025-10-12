import { StoreItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function CartItem({ products }: { products: StoreItem[] }) {
    let { removeItem ,increaseQty ,decreaseQty } = useCartStore();

    function handleCart(data: string) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        removeItem(data);
    }

    return (
        <View className="w-full gap-2 overflow-hidden bg-[#F6D3D3]/[0.6] rounded-2xl p-2">
            {products.map((data) => (
                <View key={data.id} className="flex-row items-center justify-between">
                    <View className='flex-row gap-2'>
                        <Image
                            source={data.image}
                            alt="product image"
                            height={20}
                            width={40}
                            resizeMode='cover'
                            className='h-14 w-14 rounded-2xl' />
                        <View className='justify-center'>
                            <Text className="text-xl font-bold capitalize text-black/[0.6]">{data.name}</Text>
                            <Text className="text-xs font-bold capitalize text-yellow-600">Rs {data.price} / {data.per}</Text>
                        </View>
                    </View>
                    <View className='flex-row justify-center items-center gap-6 px-2'>
                        <View className='flex-row items-center justify-center gap-1 bg-red-300 rounded-xl p-1'>
                            <TouchableOpacity onPress={()=>decreaseQty(data.name)} className='mt-1 flex-row items-center justify-center'>
                                <Ionicons name='remove' size={16} color={"red"} />
                            </TouchableOpacity>

                            <Text className='text-black/[0.6] text-xl'>{data.quantity}</Text>

                            <TouchableOpacity onPress={()=>increaseQty(data.name)} className='mt-1 flex-row items-center justify-center'>
                                <Ionicons name='add' size={16} color={"red"} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => handleCart(data.name)} className='mt-1'>
                            <Ionicons name='close-circle' size={24} color={"red"} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>

    );
}
