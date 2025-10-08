// components/RadioGroup.tsx
import React from "react";
import { View, Text, TouchableOpacity, AccessibilityRole } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

type Option<T extends string> = { key: T; label: string; subtitle?: string; icon?: React.ReactNode };

type Props<T extends string> = {
  options: Option<T>[];
  value?: T | null;
  onChange: (value: T) => void;
  name?: string;
  vertical?: boolean;
};

export default function RadioGroup<T extends string>({
  options,
  value,
  onChange,
  vertical = true,
}: Props<T>) {
  return (
    <View style={{ flexDirection: vertical ? "column" : "row", gap: 8 }}>
      {options.map((opt) => {
        9
        const selected = value === opt.key;
        return (
          <TouchableOpacity
            key={opt.key}
            activeOpacity={0.8}
            onPress={() => {
              Haptics.selectionAsync();
              onChange(opt.key);
            }}
            accessibilityRole={"radio" as AccessibilityRole}
            accessibilityState={{ selected }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 10,
              backgroundColor: selected ? "#F6D3D3" : "transparent",
            }}
          >
            {/* Radio circle */}
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: selected ? "#190D05" : "#CCCCCC",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              {selected && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "red" }} />}
            </View>

            {/* Optional icon */}
            {opt.icon ? <View style={{ marginRight: 8 }}>{opt.icon}</View> : null}

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, color: "#190D05", fontWeight: "600" }}>{opt.label}</Text>
              {opt.subtitle ? (
                <Text style={{ fontSize: 12, color: "#6E6E6E", marginTop: 2 }}>{opt.subtitle}</Text>
              ) : null}
            </View>

            {/* Optional chevron or check */}
            {selected ? <Ionicons name="checkmark" size={18} color="red" /> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
