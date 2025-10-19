import GooglePlaces from '@/components/GooglePlaces'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SearchPage() {

    let [address, setAddress] = useState({ main: "Search", subroute: "enter your address here" })
    let [searchPrompt, setSearchPrompt] = useState("");

    return (
        <SafeAreaView className='flex-1 bg-[#FFF] p-2' edges={["left", "right"]}>
            <View className='gap-4'>
                {/* <GooglePlaces /> */}

                <TouchableOpacity
                    style={{ height: 52 }}
                    activeOpacity={0.8}
                    className='bg-[#F6D3D3]/[0.6] py-1 rounded-xl flex-row justify-between'>
                    <View className='flex-row items-center'>
                        <Image source={require("../assets/images/location.png")} alt='Location' height={20} width={40} resizeMode="contain" className='h-10 w-10' />
                        <TextInput
                            placeholder={`${address.main}, ${address.subroute}`}
                            placeholderTextColor={"#888"}
                            className='text-md w-full h-full'>
                        </TextInput>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ height: 52 }}
                    className="rounded-xl bg-[#F6D3D3]/[0.6] pl-10 relative flex-row items-center"
                >
                    <Ionicons
                        name="search"
                        size={20}
                        color={'red'}
                        className="absolute left-2"
                    />
                    <TextInput
                        value={searchPrompt}
                        onChangeText={setSearchPrompt}
                        selectTextOnFocus
                        placeholder="search here"
                        placeholderTextColor={"#888"}
                        className='text-md w-[80%] h-full'>
                    </TextInput>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}