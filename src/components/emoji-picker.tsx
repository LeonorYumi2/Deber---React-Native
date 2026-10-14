import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { EPN } from '@/constants/epn-theme';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Elegir un sticker</Text>
            <Pressable
              accessibilityLabel="Cerrar selector de stickers"
              accessibilityRole="button"
              style={styles.closeButton}
              onPress={onClose}
            >
              <MaterialIcons name="close" color={EPN.colors.onPrimary} size={EPN.spacing.md} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: EPN.colors.surface,
    borderTopRightRadius: EPN.radius.lg,
    borderTopLeftRadius: EPN.radius.lg,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    minHeight: EPN.spacing.xl + EPN.spacing.md,
    backgroundColor: EPN.colors.primary,
    borderTopRightRadius: EPN.radius.md,
    borderTopLeftRadius: EPN.radius.md,
    paddingHorizontal: EPN.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: EPN.colors.onPrimary,
    fontSize: EPN.font.body,
    fontWeight: '700',
  },
  closeButton: {
    minWidth: EPN.spacing.xl + EPN.spacing.md,
    minHeight: EPN.spacing.xl + EPN.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
