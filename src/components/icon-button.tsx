import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN } from '@/constants/epn-theme';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      style={styles.iconButton}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={EPN.spacing.lg} color={EPN.colors.primary} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    minWidth: EPN.spacing.xl + EPN.spacing.md,
    minHeight: EPN.spacing.xl + EPN.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: EPN.colors.primary,
    fontSize: EPN.font.caption,
    marginTop: EPN.spacing.xs,
  },
});
