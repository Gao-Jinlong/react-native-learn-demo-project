import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSOurce = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSOurce} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
