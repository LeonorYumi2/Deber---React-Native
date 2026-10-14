import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN } from '@/constants/epn-theme';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        accessibilityLabel="Añadir sticker"
        accessibilityRole="button"
        style={styles.circleButton}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={EPN.spacing.xl} color={EPN.colors.onPrimary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: EPN.spacing.xl + EPN.spacing.lg,
    height: EPN.spacing.xl + EPN.spacing.lg,
    marginHorizontal: EPN.spacing.xl,
    borderRadius: EPN.radius.round,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: EPN.radius.round,
    backgroundColor: EPN.colors.primary,
  },
});
