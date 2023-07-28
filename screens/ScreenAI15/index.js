import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.date}>Date: 01/01/2022</Text>
        <View style={styles.medicalRecord}>
          <Text style={styles.title}>Medical Record</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae nunc tincidunt aliquet. Nulla facilisi.</Text>
        </View>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI23");
      }}>
          <Text style={styles.buttonText}>Add a new Daily Log</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI16");
      }}>
          <Text style={styles.buttonText}>See summary</Text>
        </TouchableOpacity>
        <View style={styles.log}>
          <Text style={styles.logDate}>Date: 01/01/2022</Text>
          <Text style={styles.logTitle}>Log Title</Text>
          <Text style={styles.logDescription}>Short description of the log</Text>
          <TouchableOpacity style={styles.selectButton} onPress={() => {
          navigation.navigate("ScreenAI22");
        }}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI20");
      }}>
          <Text style={styles.buttonText}>Add a new Doctor appointment Log</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI17");
      }}>
          <Text style={styles.buttonText}>See summary</Text>
        </TouchableOpacity>
        <View style={styles.log}>
          <Text style={styles.logDate}>Date: 01/01/2022</Text>
          <Text style={styles.logTitle}>Log Title</Text>
          <Text style={styles.logDescription}>Short description of the log</Text>
          <TouchableOpacity style={styles.selectButton} onPress={() => {
          navigation.navigate("ScreenAI24");
        }}>
            <Text style={styles.selectButtonText}>Select</Text>
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
  medicalRecord: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 14
  },
  button: {
    backgroundColor: '#42a5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  log: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5
  },
  logDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  logTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  logDescription: {
    fontSize: 12,
    marginBottom: 5
  },
  selectButton: {
    backgroundColor: '#42a5f5',
    padding: 5,
    borderRadius: 5
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default Screen;