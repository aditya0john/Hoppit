import { categories, products } from '@/lib/data';
import { GroceryItem } from '@/lib/schema';
import { supabase } from '@/lib/supabaseClient';
import { useCartStore } from '@/store/useCartStore';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function CategoryPage() {
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 4;
    const itemSpacing = 10;
    const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

    const { id } = useLocalSearchParams<{ id?: string }>();

    let [selectedCat, setSelectedCat] = useState(id);

    let { addItem, cartItems, increaseQty, decreaseQty } = useCartStore();
    let { addFav, wishList } = useWishList();

    const [GroceryData, setGroceryData] = useState<GroceryItem[]>([]);

    useEffect(() => {
        const fetchGroceries = async () => {
            const { data, error } = await supabase
                .from('grocery')
                .select('*')
                .eq("category", selectedCat);

            if (error) {
                console.error(error)
            } else {
                setGroceryData(data)
            }
        }

        fetchGroceries();
    }, [selectedCat])


    function handleCart(data: GroceryItem) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        addItem(data);
    }

    function handleFav(data: GroceryItem) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        addFav(data);
    }


    return (
        <GestureHandlerRootView>
            <SafeAreaView className="flex-1 bg-[#FFF] p-2" edges={["left", "right"]}>
                <View className='flex-row w-full gap-2'>
                    <View style={{ flex: 2 }}>
                        <ScrollView
                            decelerationRate={'fast'}
                            contentContainerStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                                padding: 6,
                                marginLeft: 2,
                            }}
                            showsVerticalScrollIndicator={false}>
                            {categories.map((data) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedCat(data.id)}
                                    key={data.id}
                                    activeOpacity={0.8}
                                    className="flex-col items-center justify-center rounded-full">
                                    <Image
                                        source={data.image}
                                        alt="Category image"
                                        height={40}
                                        width={40}
                                        className={`h-20 w-20 rounded-full bg-[#F6D3D3]/[0.4] object-cover ${selectedCat === data.id ? "bg-red-400" : "bg-[#F6D3D3]/[0.4]"}`}
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
                        <ScrollView
                            contentContainerStyle={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: 4,
                                alignItems: "flex-start",
                                justifyContent: 'flex-start',
                                marginLeft: 1
                            }}>
                            {GroceryData.length === 0 ?
                                <View className="flex-1 items-center justify-center bg-[#FFF]">
                                    <Text className="text-gray-300 font-bold text-lg">No products found</Text>
                                </View>
                                :
                                GroceryData.map((data, index) => {
                                    const cartItem = cartItems.find((i) => i.itemName === data.itemName);
                                    const wishListItem = wishList.find((i) => i.itemName === data.itemName);

                                    return (
                                        <View
                                            key={`${index}-${data.itemName}`}
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
                                            <Text className="text-xs font-bold capitalize text-black/[0.6]">{data.itemName}</Text>
                                            <Text className="text-xs font-bold capitalize text-black/[0.4]">{data.brand}</Text>
                                            <Text className="text-xs font-bold capitalize text-yellow-600">Rs {data.price}</Text>
                                            {cartItem ?
                                                <View className='flex-row items-center justify-center gap-1 bg-red-200 rounded-xl px-1'>
                                                    <TouchableOpacity onPress={() => decreaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                                                        <Ionicons name='remove' size={14} color={"red"} />
                                                    </TouchableOpacity>

                                                    <Text className='text-black/[0.6] text-lg'>{cartItem.quantity}</Text>

                                                    <TouchableOpacity onPress={() => increaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                                                        <Ionicons name='add' size={14} color={"red"} />
                                                    </TouchableOpacity>
                                                </View>

                                                :
                                                <TouchableOpacity onPress={() => handleCart(data)} className='flex-row bg-green-500/[0.1] p-1 rounded-lg items-center mt-1'>
                                                    <Text className='text-green-600 font-bold'>ADD</Text><Ionicons name="cart-outline" size={20} color={"#369E59"} />
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