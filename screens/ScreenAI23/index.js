import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.date}>Today's Date</Text>
        <TextInput style={styles.titleInput} placeholder="Title" />
        <TextInput style={styles.descriptionInput} placeholder="Short Description" />
      </View>
      <View style={styles.section}>
        <Button title="Upload Image" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Health Events Logging</Text>
        <TextInput style={styles.input} placeholder="Exercise routines, sleep patterns, stress levels, etc." />
        <Text style={styles.sectionTitle}>Symptom Input</Text>
        <TextInput style={styles.input} placeholder="Enter symptom details" />
        <Text style={styles.sectionTitle}>Severity Scale</Text>
        <TextInput style={styles.input} placeholder="Rate symptom severity" />
        <Text style={styles.sectionTitle}>Duration Recording</Text>
        <TextInput style={styles.input} placeholder="Enter symptom duration" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Food Entry</Text>
        <TextInput style={styles.input} placeholder="Enter food details" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Create Log" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
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
  titleInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  descriptionInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
export default Screen;