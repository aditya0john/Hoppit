import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Restaurant() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#190D05]">
      <Text className="text-4xl font-bold text-white">RESTAURANT</Text>
    </SafeAreaView>
  );
}
