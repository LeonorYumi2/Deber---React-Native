import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { EPN } from '@/constants/epn-theme';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: EPN.radius.lg,
  },
});
