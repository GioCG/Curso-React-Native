import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProductDetailsScreen.styles';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Q{product.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart', { product })}
      >
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsScreen;
