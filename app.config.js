import "dotenv/config";

export default {
  expo: {
    name: "Hoppit",
    slug: "hoppit",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/LOGO_LIGHT.png",
    scheme: "hoppit",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      }
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        }
      },
      adaptiveIcon: {
        backgroundColor: "#E6F4FE"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false
    },
    extra: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
    web: {
      output: "static",
      favicon: "./assets/images/LOGO_DARK.png",
      bundler: "metro"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/LOGO_LIGHT.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#FCF5E5",
          dark: {
            image: "./assets/images/LOGO_DARK.png",
            backgroundColor: "#000"
          }
        }
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    },
    owner: "aditya_john"
  }
};