import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

const PLACEHOLDERS = [
  "fruits...",
  "snacks...",
  "dairy products...",
  "vegetables...",
  "Pizza...",
  "Burger...",
];

export default function SearchBar() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current placeholder
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Switch to next placeholder
        setIndex((prev) => (prev + 1) % PLACEHOLDERS.length);

        // Fade in new placeholder
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);


  return (
    <TouchableOpacity
      onPress={() => router.push("/SearchPage")}
      activeOpacity={0.8}
      style={{ height: 42 }}
      className="rounded-xl bg-[#F6D3D3]/[0.6] pl-7 relative flex-row items-center w-[50%]"
    >
      <Ionicons
        name="search"
        size={16}
        color={'red'}
        className="absolute left-2"
      />
      <Text className='text-xs text-black/[0.6]'>Hoppit your
        <Animated.Text
          style={{
            opacity: fadeAnim,
          }}>
          {" " + PLACEHOLDERS[index]}
        </Animated.Text>
      </Text>
    </TouchableOpacity>
  )
}
