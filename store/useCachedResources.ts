import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync(); // Keep splash visible while loading

export default function useCachedResources() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // 🧩 1. Load icon fonts (like Ionicons)
        await Font.loadAsync(Ionicons.font);

        // 🖼️ 2. Preload commonly used images
        const imageAssets = cacheImages([
          require('../assets/images/LOGO2.png'),
          require('../assets/images/location.png'),
          require('../assets/images/HP.png'),
        ]);

        await Promise.all([...imageAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync(); // Hide splash when done
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isReady;
}

// Helper function for images
function cacheImages(images: any[]) {
  return images.map((image) => Asset.fromModule(image).downloadAsync());
}
