import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { EPN } from "@/constants/epn-theme";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[styles.buttonContainer, styles.primaryContainer]}
      >
        <Pressable
          accessibilityLabel={label}
          accessibilityRole="button"
          style={[styles.button, styles.primaryButton]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={EPN.spacing.md}
            color={EPN.colors.onPrimary}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, styles.primaryLabel]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      style={[styles.button, styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    minHeight: EPN.spacing.xl + EPN.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: EPN.spacing.xs,
  },
  button: {
    borderRadius: EPN.radius.md,
    width: "100%",
    minHeight: EPN.spacing.xl + EPN.spacing.md,
    paddingHorizontal: EPN.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primaryContainer: {
    alignSelf: "center",
  },
  primaryButton: {
    backgroundColor: EPN.colors.primary,
  },
  secondaryButton: {
    backgroundColor: EPN.colors.surface,
    borderColor: EPN.colors.primary,
    borderWidth: 2,
  },
  buttonIcon: {
    marginRight: EPN.spacing.sm,
  },
  buttonLabel: {
    color: EPN.colors.primary,
    fontSize: EPN.font.body,
    fontWeight: "700",
  },
  primaryLabel: {
    color: EPN.colors.onPrimary,
  },
});
