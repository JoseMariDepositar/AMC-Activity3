import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const ProfileScreen = () => {
  
  const name = 'Jemjem';
  const bio = 'Pogi';

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  name: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
  },
  bio: {
    fontSize: 16, 
    color: '#666', 
  },
});

export default ProfileScreen;