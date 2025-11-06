import { categories } from '@/lib/data'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


function CategoryCarousel() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        decelerationRate={'fast'}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: 6,
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
              className="h-20 w-20 rounded-full bg-[#F6D3D3]/[0.4]"
              resizeMode="contain"
            />
            
            <Text className="mt-1 text-center text-xs font-semibold text-black/[0.6]">
              {data.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryCarousel