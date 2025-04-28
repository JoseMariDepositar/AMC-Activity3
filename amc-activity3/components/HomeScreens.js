import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://th.bing.com/th/id/OIP.1-WBJwv95r1wai0YHbFugQHaEK?rs=1&pid=ImgDetMain' }} 
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400, 
    height: 300, 
    resizeMode: 'cover', 
  },
});

export default HomeScreen;