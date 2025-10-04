import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar() {
  return (
     <View className="relative flex-row items-center w-[50%]">
        <TextInput
        placeholder="Hoppit se Drop it tak..."
        style={{height: 42}}
        className="rounded-xl bg-[#F6D3D3]/[0.6] pl-7 text-black text-xs w-full"
        placeholderTextColor={'#0000006a'}
        />
        <Ionicons
        name="search"
        size={16}
        color={'red'}
        className="absolute left-2"
        />
    </View>
  )
}
