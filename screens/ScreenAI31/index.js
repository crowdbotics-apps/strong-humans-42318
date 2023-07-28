import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Are you sure you want to Log Out</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default LogoutScreen;