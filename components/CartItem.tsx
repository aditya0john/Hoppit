import { GroceryItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function CartItem({ products }: { products: GroceryItem[] }) {
    let { removeItem, increaseQty, decreaseQty } = useCartStore();

    function handleCart(data: string) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        removeItem(data);
    }

    return (
        <View className="w-full gap-2 overflow-hidden bg-[#F6D3D3]/[0.6] rounded-2xl p-2">
            {products.map((data) => (
                <View key={data.itemId} className="flex-row items-center justify-between">
                    <View className='flex-row gap-2 w-[60%]'>
                        <Image
                            source={data.image}
                            alt="product image"
                            height={20}
                            width={40}
                            resizeMode='cover'
                            className='h-14 w-14'
                        />

                        <View className='justify-center'>
                            <Text className="text-md font-bold capitalize text-black/[0.6]" numberOfLines={1}>{data.itemName}</Text>
                            <Text className="text-xs font-bold capitalize text-yellow-600">Rs {data.price} / per quantity</Text>
                        </View>
                    </View>

                    <View className='flex-row justify-center items-center gap-6 px-2'>
                        <View className='flex-row items-center justify-center gap-1 bg-red-200 rounded-lg p-1'>
                            <TouchableOpacity onPress={() => decreaseQty(data.itemName)} className='flex-row items-center justify-center'>
                                <Ionicons name='remove' size={16} color={"red"} />
                            </TouchableOpacity>

                            <View className='justify-center w-8 items-center'>
                                <Text className='text-black/[0.6] text-xl'>{data.quantity}</Text>
                            </View>

                            <TouchableOpacity onPress={() => increaseQty(data.itemName)} className='flex-row items-center justify-center'>
                                <Ionicons name='add' size={16} color={"red"} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => handleCart(data.itemName)}>
                            <Ionicons name='close-circle' size={24} color={"red"} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
}
