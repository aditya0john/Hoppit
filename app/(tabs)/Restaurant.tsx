import { stores } from '@/lib/data';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Restaurant() {
  const screenWidth = Dimensions.get('window').width;
    const numColumns = 4;
    const itemSpacing = 10;
    const itemWidth = (screenWidth - (numColumns + 1) * itemSpacing) / numColumns;

  return (
    <SafeAreaView className="flex-1 items-center bg-[#FFF] p-2">
       <View className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#D0C4D6]/[0.6]">
            <View className="w-full flex-row items-center justify-between rounded-xl bg-[#D0C4D6] p-2">
              <Text className="text-lg font-semibold text-white">Restaurant near you</Text>
              <Ionicons name="chevron-forward-outline" color="#FFFFFF6a" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 10,
                justifyContent: 'flex-start',
              }}>
              {stores.map((data) => (
                <TouchableOpacity
                  key={data.id}
                  activeOpacity={0.8}
                  style={{ width: itemWidth, margin: 2 }}
                  className="h-24 items-center justify-center rounded-xl bg-[#FCF5E5] p-2">
                  <Text className="text-xs font-bold text-[#190D05]">{data.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
    </SafeAreaView>
  );
}
