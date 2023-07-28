import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

const MedicalBackgroundScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 1</Text>
        <Text style={styles.sectionDescription}>
          This allows users to provide detailed information about their medical background. By gathering comprehensive health data, the app can offer personalized insights, enhance the user experience, and facilitate better communication with healthcare providers.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 2</Text>
        <Text style={styles.sectionSubtitle}>Emergency Contact:</Text>
        <TextInput style={styles.input} placeholder="Full name" />
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput style={styles.input} placeholder="Phone number" />
        <TextInput style={styles.input} placeholder="Street address" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="Zip Code" />
        <TextInput style={styles.input} placeholder="State" />
        <TextInput style={styles.input} placeholder="Relation" />
        <Button title="Add Contact" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666'
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12
  }
};
export default MedicalBackgroundScreen;