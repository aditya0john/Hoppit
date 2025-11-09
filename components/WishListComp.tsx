import { GroceryItem } from '@/lib/schema';
import { useCartStore } from '@/store/useCartStore';
import { useWishList } from '@/store/useWishList';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function WishListComp({ products }: { products: GroceryItem[] }) {
    let { cartItems, addItem, increaseQty, decreaseQty } = useCartStore();
    let { addFav, wishList, removeFav } = useWishList();

    function handleCart(data: any) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        addItem(data);
        removeFav(data.itemName);
    }
    function handleFav(data: any) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        addFav(data);
    }

    return (
        <View className="flex-1">
            <View className="mt-2 w-full rounded-xl">
                <View>
                    {products.map((data) => {
                        const wishListItem = wishList.find((i) => i.itemName === data.itemName);
                        const cartItem = cartItems.find((i) => i.itemName === data.itemName);

                        return (
                            <View key={data.itemId} className="flex flex-col mt-2 items-start justify-start relative bg-white rounded-2xl">

                                <View className="flex-row h-12 items-center justify-between w-full px-2">
                                    <View className='flex-row w-[70%]'>
                                        <Image
                                            source={data.image}
                                            alt="product image"
                                            height={20}
                                            width={40}
                                            resizeMode='contain'
                                            className='h-12 w-12 rounded-t-xl' />
                                        <View className='flex-col'>
                                            <Text className="text-xs font-bold capitalize text-black/[0.6]" numberOfLines={1}>{data.itemName}</Text>
                                            <Text className="text-xs font-bold capitalize text-yellow-600">Rs {data.price}</Text>
                                        </View>
                                    </View>

                                    {cartItem ?
                                        <View className='flex-row items-center justify-center gap-1 bg-green-500 rounded-lg px-1 mt-1'>
                                            <TouchableOpacity onPress={() => decreaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                                                <Ionicons name='remove' size={16} color={"white"} />
                                            </TouchableOpacity>

                                            <Text className='text-white font-bold text-lg'>{cartItem.quantity}</Text>

                                            <TouchableOpacity onPress={() => increaseQty(data.itemName)} className='mt-1 flex-row items-center justify-center'>
                                                <Ionicons name='add' size={16} color={"white"} />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <TouchableOpacity onPress={() => handleCart(data)} className='flex-row bg-green-500/[0.1] p-1 rounded-lg items-center mt-1'>
                                            <Text className='text-green-600 font-bold'>ADD</Text>
                                            <Ionicons name="cart-outline" size={20} color={"#369E59"} />
                                        </TouchableOpacity>
                                    }

                                    <TouchableOpacity onPress={() => handleFav(data)} className='justify-center items-center z-50'>
                                        <Ionicons name={`${wishListItem ? "heart" : "heart-outline"}`} size={20} color={"#FF8F94"} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    );
}
