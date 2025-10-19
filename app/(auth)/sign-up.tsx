import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = useState('')
  const [phone, setPhone] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')


  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      const usePhone = emailAddress.trim() === "";

      // Create only one field
      if (usePhone) {
        await signUp.create({ phoneNumber: phone });
        await signUp.preparePhoneNumberVerification({ strategy: "phone_code" });
      } else {
        await signUp.create({ emailAddress: emailAddress });
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
    setPendingVerification(false);
  }

  if (pendingVerification) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -30 : 0}
        >
          <SafeAreaView className='flex-1 items-center justify-end gap-6 bg-red-300' edges={["top", "left", "right"]}>
            <View className='items-center justify-start min-h-[70%] w-full gap-6 bg-white p-4 rounded-3xl'>
              <View className='items-center justify-center gap-6 w-full'>
                <View className='items-center'>
                  <Text className='text-5xl text-[#FFBD00] uppercase w-full font-bold'>verification</Text>
                </View>
                
                <TextInput
                  autoFocus
                  value={code}
                  placeholder="Enter OTP"
                  onChangeText={(code) => setCode(code)}
                  keyboardType='number-pad'
                  placeholderTextColor={"lightgray"}
                  className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[80%] h-20 text-2xl text-center text-black/[0.6]'
                />
              </View>
            </View>
          </SafeAreaView>

          <TouchableOpacity onPress={cancelVerificartion} className='bg-neutral-300 p-2 rounded-lg absolute bottom-10 left-10'>
            <Text className='text-white font-bold text-2xl'>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onVerifyPress} className='bg-green-500 p-2 rounded-lg absolute bottom-10 right-10'>
            <Text className='text-white font-bold text-4xl'>Verify</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <SafeAreaView className='flex-1 items-center justify-end gap-6 bg-red-200' edges={["top", "left", "right"]} >
          <Image src={require("../../assets/images/LOGO2.png")} alt='logo' height={400} width={400} resizeMode='contain' className='h-100 w-100 absolute top-10' />

          <View className='items-center justify-start min-h-[70%] w-full gap-6 bg-white p-4 rounded-t-3xl'>
            <View className='items-center'>
              <Text className='text-5xl text-[#FFBD00] uppercase w-full font-bold'>HOPPIT</Text>
            </View>

            <View className='gap-2 w-full items-center justify-center' >
              <TextInput
                value={phone}
                onChangeText={setPhone}
                textContentType="telephoneNumber"
                placeholder="+91 - _______________"
                keyboardType="phone-pad"
                placeholderTextColor={"lightgray"}
                className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[80%] h-20 text-2xl text-center font-semibold text-black/[0.6]'
              />

              <Text className="text-xl font-semibold text-black/[0.4] uppercase">OR</Text>

              <View className='flex-row gap-2'>
                <TextInput
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                  textContentType="name"
                  placeholder="First Name"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={"lightgray"}
                  className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[50%] h-20 text-xl text-center italic text-black/[0.6]'
                />  <TextInput
                  value={emailAddress}
                  onChangeText={setEmailAddress}
                  textContentType="name"
                  placeholder="Last Name"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={"lightgray"}
                  className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[50%] h-20 text-xl text-center italic text-black/[0.6]'
                />
              </View>

              <TextInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                textContentType="name"
                placeholder="username *dont use spaces*"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={"lightgray"}
                className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[100%] h-20 text-xl text-center italic text-black/[0.6]'
              />

              <TextInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                textContentType="emailAddress"
                placeholder="email@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={"lightgray"}
                className='bg-neutral-200/[0.6] rounded-3xl p-4 w-[100%] h-20 text-xl text-center italic text-black/[0.6]'
              />
            </View>
          </View>
        </SafeAreaView>

        <TouchableOpacity onPress={onSignUpPress} className='bg-green-500 p-2 rounded-lg absolute bottom-10 right-10'>
          <Text className='text-white font-bold text-4xl'>Sign In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  )
}