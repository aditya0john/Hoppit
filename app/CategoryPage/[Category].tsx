import { categories, products } from '@/lib/data';
import { StoreItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function CategoryPage() {
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 4;
    const itemSpacing = 10;
    const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

    let { addItem, cartItems, increaseQty, decreaseQty } = useCartStore();
    let { addFav, wishList } = useWishList();

    function handleCart(data: StoreItem) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        addItem(data);
    }

    function handleFav(data: StoreItem) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        addFav(data);
    }

    const { id } = useLocalSearchParams<{ id?: string }>(); // e.g., ?category=fruits
    const categoryProducts: StoreItem[] =
        id && id in products ? products[id as keyof typeof products] : [];

    return (
        <GestureHandlerRootView>
            <SafeAreaView className="flex-1 bg-[#FFF] p-2" edges={["top", "left", "right"]}>
                <View className='flex-row w-full gap-2'>
                    <View style={{ flex: 2 }}>
                        <ScrollView
                            decelerationRate={'fast'}
                            contentContainerStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                                padding: 6,
                                marginLeft: 2
                            }}
                            showsVerticalScrollIndicator={false}>
                            {categories.map((data) => (
                                <TouchableOpacity
                                    onPress={() => router.push({
                                        pathname: "/CategoryPage/[Category]",
                                        params: {
                                            id: data.id,
                                        },
                                    })}
                                    key={data.id}
                                    activeOpacity={0.8}
                                    className="flex-col items-center justify-center rounded-full">
                                    <Image
                                        source={data.image}
                                        alt="Category image"
                                        height={40}
                                        width={40}
                                        className="h-20 w-20 rounded-full bg-[#F6D3D3]/[0.4] object-cover"
                                        resizeMode="cover"
                                    />
                                    <Text className="mt-2 text-center text-xs font-bold text-black/[0.6]">
                                        {data.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View className='h-full w-0 border border-black/[0.1]' />

                    <View style={{ flex: 8 }}>
                        <View className='items-center'>
                            <Text className='uppercase text-black/[0.4] font-bold text-3xl'>{id}</Text>
                        </View>
                        <ScrollView
                            contentContainerStyle={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: 4,
                                alignItems: "flex-start",
                                justifyContent: 'flex-start',
                                marginLeft: 1
                            }}>
                            {categoryProducts.length === 0 ?
                                <View className="flex-1 items-center justify-center bg-[#FFF]">
                                    <Text className="text-gray-300 font-bold text-lg">No products found</Text>
                                </View>
                                :
                                categoryProducts.map((data, index) => {
                                    const cartItem = cartItems.find((i) => i.name === data.name);
                                    const wishListItem = wishList.find((i) => i.name === data.name);

                                    return (
                                        <View
                                            key={`${index}-${data.id}`}
                                            style={{ width: itemWidth, margin: 2 }}
                                            className="h-44 items-center rounded-xl bg-[#F6D3D3]/[0.2] relative">
                                            <TouchableOpacity onPress={() => handleFav(data)} className='absolute top-1 right-1 z-50'>
                                                <Ionicons name={`${wishListItem ? "heart" : "heart-outline"}`} size={20} color={"red"} />
                                            </TouchableOpacity>
                                            <Image
                                                source={data.image}
                                                alt="product image"
                                                height={20}
                                                width={40}
                                                resizeMode='cover'
                                                className='h-20 w-full rounded-t-xl' />
                                            <Text className="text-lg font-bold capitalize text-black/[0.6]">{data.name}</Text>
                                            <Text className="text-xs font-bold capitalize text-yellow-600">{data.price}</Text>
                                            <View className='flex-row items-center'>
                                                <Ionicons name='time-outline' color={"red"} size={12} />
                                                <Text className="text-xs font-bold capitalize text-black/[0.6]">{data.time}</Text>
                                            </View>
                                            {cartItem ?
                                                <View className='flex-row items-center justify-center gap-1 bg-red-300 rounded-xl px-1'>
                                                    <TouchableOpacity onPress={() => decreaseQty(data.name)} className='mt-1 flex-row items-center justify-center'>
                                                        <Ionicons name='remove' size={14} color={"red"} />
                                                    </TouchableOpacity>

                                                    <Text className='text-black/[0.6] text-xl'>{cartItem.quantity}</Text>

                                                    <TouchableOpacity onPress={() => increaseQty(data.name)} className='mt-1 flex-row items-center justify-center'>
                                                        <Ionicons name='add' size={14} color={"red"} />
                                                    </TouchableOpacity>
                                                </View>

                                                :
                                                <TouchableOpacity onPress={() => handleCart(data)} className='bg-red-200 px-2 py-1 rounded-xl items-center mt-1'>
                                                    <Text className='text-black/[0.6] text-xs font-bold'>Add to Cart</Text>
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    )
                                }
                                )
                            }


                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default CategoryPage