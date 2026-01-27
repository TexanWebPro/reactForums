import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";

import { useQuery } from "@tanstack/react-query";

const baseUrl = "http://localhost:9999/";

export default function HomeScreen() {
  const { data } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/api/forums/query/by-category`);
      return res.json();
    },
  });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} />
      }
    >
      <View>{JSON.stringify(data[0].name, null, 2)}</View>
    </ParallaxScrollView>
  );
}

// --- Simple styling ---
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  item: { fontSize: 18, marginBottom: 8 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});
