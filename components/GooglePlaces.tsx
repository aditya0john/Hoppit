import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function GooglePlaces() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const key = Constants?.expoConfig?.extra?.googleMapsApiKey;
    if (key) {
      setApiKey(key);
      setReady(true); // Only render after key is set
    }
  }, []);

  console.log(ready, apiKey);


  if (!ready || !apiKey) return null;

  try {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {apiKey &&
          <GooglePlacesAutocomplete
            placeholder="Search for your location"
            fetchDetails={true}
            onPress={(data, details = null) => {
              console.log("Data:", data);
              console.log("Details:", details?.geometry?.location);
            }}
            query={{
              key: apiKey,
              language: "en",
            }}
            styles={{
              container: { flex: 0 },
              textInput: { height: 40, borderColor: "#ddd", borderWidth: 1, paddingHorizontal: 10 },
            }}
            debounce={200}
            minLength={2}
            enablePoweredByContainer={false} // <-- this is optional but safe
            renderRow={(row) => row ? row.description : null}
          />
        }
      </View>
    );
  } catch (error) {
    console.error("GooglePlacesAutocomplete error:", error);
    return <Text>Unable to load location search</Text>;
  }
}
