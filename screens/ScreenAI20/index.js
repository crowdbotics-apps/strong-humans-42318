import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [note, setNote] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = () => {// Handle image upload logic here
  };

  const handleImageRemove = index => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleCreateLog = () => {// Handle create log logic here
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Section 1</Text>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
          <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
          <TextInput style={styles.input} placeholder="Short Description" value={description} onChangeText={setDescription} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Section 2</Text>
          <TextInput style={styles.input} placeholder="Institution Name" value={institution} onChangeText={setInstitution} />
          <TextInput style={styles.input} placeholder="Department Name" value={department} onChangeText={setDepartment} />
          <TextInput style={styles.input} placeholder="Doctor Full Name" value={doctor} onChangeText={setDoctor} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Section 3</Text>
          <TextInput style={styles.noteInput} placeholder="Note" multiline value={note} onChangeText={setNote} />
          <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
          {images.map((image, index) => <View key={index} style={styles.imageContainer}>
              <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.image} />
              <TouchableOpacity style={styles.removeButton} onPress={() => handleImageRemove(index)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>)}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.createButton} onPress={handleCreateLog}>
            <Text style={styles.createButtonText}>Create Log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    padding: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  date: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  noteInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
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
    backgroundColor: '#FF3B30',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  createButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default ScreenComponent;