import { StyleSheet, Text, View } from "react-native";
import { EPN } from "@/constants/epn-theme";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Sticker Smash</Text>
      <Text style={styles.text}>
        Crea imágenes con stickers y guárdalas en tu dispositivo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EPN.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: EPN.spacing.md,
    gap: EPN.spacing.sm,
  },
  title: {
    color: EPN.colors.primary,
    fontSize: EPN.font.title,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    color: EPN.colors.text,
    fontSize: EPN.font.body,
    textAlign: "center",
  },
});
