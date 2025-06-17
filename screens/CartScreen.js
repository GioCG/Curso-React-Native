import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './Styless.js';

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some(item => item.id === product.id)) {
      setCart(prevCart => [...prevCart, product]);
    }
  }, [route.params?.product]);

  const placeOrder = () => {
    alert('¡Pedido realizado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Tu Pedido</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>Q{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Tu carrito está vacío 🍟</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={placeOrder}>
        <Text style={styles.buttonText}>Realizar Pedido (Efectivo)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
