import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Restaurant() {

  return (
    <SafeAreaView className='flex-1 bg-[#FFF] p-2 items-center justify-center'>
      <Text className='text-black/[0.4] text-5xl font-bold'>Comming Soon</Text>
    </SafeAreaView>
  );
}
