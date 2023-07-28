import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const AppScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to MyApp</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          MyApp is a modern and user-friendly application that allows you to
          easily manage your tasks and stay organized. With its intuitive
          interface and powerful features, you can stay on top of your
          to-do list and never miss a deadline again.
        </Text>
        <Text style={styles.owner}>App Owner: John Doe</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.ownerImage} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  owner: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  ownerImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
export default AppScreen;