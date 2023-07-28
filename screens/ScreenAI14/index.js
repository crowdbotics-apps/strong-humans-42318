import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  const [recordTitle, setRecordTitle] = useState('');
  const [recordDescription, setRecordDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState('');

  const handleImageUpload = () => {// Code to handle image upload
  };

  const handleImageRemove = () => {
    // Code to remove uploaded image
    setUploadedImage('');
  };

  const handleCreateRecord = () => {// Code to create record
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.date}>{new Date().toDateString()}</Text>
      <TextInput style={styles.input} placeholder="Record Title" value={recordTitle} onChangeText={setRecordTitle} />
      <TextInput style={styles.input} placeholder="Record Description" value={recordDescription} onChangeText={setRecordDescription} />
      <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      {uploadedImage ? <View style={styles.imageContainer}>
          <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
          <TouchableOpacity style={styles.removeButton} onPress={handleImageRemove}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View> : null}
      <TouchableOpacity style={styles.button} onPress={handleCreateRecord}>
        <Text style={styles.buttonText}>Create a Record</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '100%',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12
  }
};
export default Screen;