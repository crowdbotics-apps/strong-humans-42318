import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.date}>Date</Text>
        <Text style={styles.title}>Log - Title</Text>
        <Text style={styles.description}>Log - Short description</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.institution}>Institution name</Text>
        <Text style={styles.department}>Department name</Text>
        <Text style={styles.doctor}>Doctor full name</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.note}>Note</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  section: {
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  institution: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  department: {
    fontSize: 16,
    marginBottom: 10
  },
  doctor: {
    fontSize: 16,
    marginBottom: 10
  },
  note: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};
export default Screen;