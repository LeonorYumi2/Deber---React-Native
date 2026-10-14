import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { EPN } from "@/constants/epn-theme";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{
            title: "No encontrado",
            headerStyle: { backgroundColor: EPN.colors.primary },
            headerTintColor: EPN.colors.onPrimary,
            headerTitleStyle: {
              fontSize: EPN.font.title,
              fontWeight: "700",
            },
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
