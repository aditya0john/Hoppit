import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar() {
  return (
     <View className="relative mt-2 flex-row items-center">
        <TextInput
        placeholder="Hoppit Kar...."
        style={{height: 40}}
        className="rounded-xl bg-[#F6D3D3]/[0.4] pl-8 text-black text-lg w-full"
        placeholderTextColor={'#0000006a'}
        />
        <Ionicons
        name="search"
        size={20}
        color={'red'}
        className="absolute left-2 top-3"
        />
    </View>
  )
}
