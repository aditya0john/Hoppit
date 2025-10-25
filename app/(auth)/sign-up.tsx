import { useSignUp } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [user, setUser] = useState({ FirstName: "", LastName: "", Username: "" });
  const [emailAddress, setEmailAddress] = useState('')
  const [phone, setPhone] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')


  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      const usePhone = emailAddress.trim() === "";

      const userData = {
        firstName: user.FirstName,
        lastName: user.LastName,
        username: user.Username,
      };

      // Create only one field
      if (usePhone) {
        await signUp.create({
          ...userData,
          phoneNumber: phone,
        });

        await signUp.preparePhoneNumberVerification({ strategy: "phone_code" });
      } else {
        await signUp.create({
          ...userData,
          emailAddress: emailAddress,
        });

        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      }

      setPendingVerification(true);
    } catch (err) {
      console.error("SignUp error:", JSON.stringify(err, null, 2));
    }
  };


  const onVerifyPress = async () => {
    if (!isLoaded) return;

    const usePhone = emailAddress === ""

    try {
      const verificationAttempt = usePhone
        ? await signUp.attemptPhoneNumberVerification({ code })
        : await signUp.attemptEmailAddressVerification({ code });

      if (verificationAttempt.status === "complete") {
        await setActive({ session: verificationAttempt.createdSessionId });
        router.replace("/"); // go to main app
        return;
      }

      console.log("Verification incomplete:", verificationAttempt);
    } catch (err) {
      console.error("Verify error:", JSON.stringify(err, null, 2));
    }
  };

  const cancelVerificartion = () => {
    setEmailAddress("");
    setPhone("");
    setCode("");
    setUser({ FirstName: "", LastName: "", Username: "" });
    setPendingVerification(false);
  }

  if (pendingVerification) {
    return (
      <SafeAreaView className='flex-1 items-center justify-between gap-6 bg-[#FCF5E5]' edges={["top", "left", "right"]}>
        <View className='items-center'>
          <Image
            source={require("../../assets/images/LOGO_LIGHT.png")}
            alt='logo'
            height={200}
            width={200}
            resizeMode='cover'
            className='h-[210] w-[250]' />
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className='items-center justify-start h-full w-full bg-white p-4 rounded-3xl relative'>
              <View className='items-center justify-center gap-6 w-full'>
                <View className='items-center'>
                  <Text className='text-5xl text-[#FFBD00] uppercase w-full font-bold'>verification</Text>
                </View>

                <View className='flex-row gap-2 justify-center'>
                  <TextInput
                    autoFocus
                    value={code}
                    placeholder="Enter OTP"
                    onChangeText={(code) => setCode(code)}
                    keyboardType='number-pad'
                    placeholderTextColor={"lightgray"}
                    className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[70%] h-16 text-2xl text-center text-black/[0.6]'
                  />

                  <TouchableOpacity onPress={onVerifyPress} className='bg-green-500 p-4 h-16 rounded-3xl justify-center'>
                    <Ionicons name="checkmark" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={cancelVerificartion} className='bg-red-500 p-2 rounded-3xl absolute top-4 left-2'>
                <Ionicons name="close" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView className='flex-1 items-center justify-between bg-[#FCF5E5]' edges={["top", "left", "right"]} >
        <View className='items-center'>
          <Image
            source={require("../../assets/images/LOGO_LIGHT.png")}
            alt='logo'
            height={200}
            width={200}
            resizeMode='cover'
            className='h-[210] w-[250] z-10' />
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
              keyboardShouldPersistTaps="handled"
            >
              <View className='items-center justify-start h-full w-full gap-6 bg-white p-4 rounded-t-3xl'>
                <View className='items-center'>
                  <Text className='text-5xl text-[#FFBD00] uppercase w-full font-bold'>HOPPIT</Text>
                </View>

                <View className='gap-4 w-full items-center justify-center'>
                  <View className='flex-row items-center justify-center gap-2'>
                    <View className='bg-neutral-200/[0.6] rounded-3xl p-4 h-16 items-center justify-center'>
                      <Text className='text-2xl text-center font-semibold text-black/[0.2]'>+91 -</Text>
                    </View>
                    <TextInput
                      value={phone}
                      onChangeText={setPhone}
                      textContentType="telephoneNumber"
                      placeholder="_ _ _ _ _ _ _ _ _ _"
                      keyboardType="phone-pad"
                      placeholderTextColor={"darkgray"}
                      className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[70%] h-16 text-2xl text-center text-black/[0.6]'
                    />
                  </View>

                  <Text className="text-2xl font-semibold text-black/[0.4] uppercase">OR</Text>

                  <View className='w-full items-center gap-4'>
                    <TextInput
                      value={emailAddress}
                      onChangeText={setEmailAddress}
                      textContentType="emailAddress"
                      placeholder="email@example.com"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholderTextColor={"darkgray"}
                      className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[100%] h-16 text-xl text-center font-semibold italic text-black/[0.6]'
                    />

                    <View className='flex-row gap-2'>
                      <TextInput
                        value={user.FirstName}
                        onChangeText={(text) => setUser((prev) => ({ ...prev, FirstName: text }))}
                        textContentType="name"
                        placeholder="First Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor={"darkgray"}
                        className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[50%] h-16 text-xl text-center font-semibold italic text-black/[0.6]'
                      />
                      <TextInput
                        value={user.LastName}
                        onChangeText={(text) => setUser((prev) => ({ ...prev, LastName: text }))}
                        textContentType="name"
                        placeholder="Last Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor={"darkgray"}
                        className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[50%] h-16 text-xl text-center font-semibold italic text-black/[0.6]'
                      />
                    </View>

                    <TextInput
                      value={user.Username}
                      onChangeText={(text) => setUser((prev) => ({ ...prev, Username: text }))}
                      textContentType="name"
                      placeholder="username *dont use spaces*"
                      keyboardType="default"
                      autoCapitalize="none"
                      placeholderTextColor={"darkgray"}
                      className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[100%] h-16 text-xl text-center font-semibold italic text-black/[0.6]'
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={onSignUpPress} className='bg-green-500 p-4 rounded-3xl absolute bottom-10 right-5'>
          <Text className='text-white font-bold text-4xl'>Sign In</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </GestureHandlerRootView>
  )
}