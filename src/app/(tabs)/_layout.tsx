import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { EPN } from "@/constants/epn-theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: EPN.colors.primary,
        tabBarInactiveTintColor: EPN.colors.textMuted,
        headerStyle: { backgroundColor: EPN.colors.primary },
        headerShadowVisible: false,
        headerTintColor: EPN.colors.onPrimary,
        headerTitleStyle: {
          fontSize: EPN.font.title,
          fontWeight: "700",
        },
        tabBarStyle: {
          backgroundColor: EPN.colors.surface,
          borderTopColor: EPN.colors.border,
        },
        tabBarLabelStyle: {
          fontSize: EPN.font.caption,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Sticker Smash",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={EPN.spacing.xl}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Acerca de",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={EPN.spacing.xl}
            />
          ),
        }}
      />
    </Tabs>
  );
}
