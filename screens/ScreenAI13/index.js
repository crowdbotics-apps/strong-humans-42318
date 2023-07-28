import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.appName}>My Application</Text>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI14");
      }}>
          <Text style={styles.buttonText}>Create a new Record</Text>
        </TouchableOpacity>
        <View style={styles.recordContainer}>
          <Text style={styles.recordTitle}>Record Title</Text>
          <Text style={styles.recordDescription}>Record Description</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.recordImage} />
          <TouchableOpacity style={styles.selectButton} onPress={() => {
          navigation.navigate("ScreenAI15");
        }}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Medical History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  section2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  recordContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  recordDescription: {
    fontSize: 16,
    marginBottom: 5
  },
  recordImage: {
    width: 200,
    height: 200,
    marginBottom: 5
  },
  selectButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
};
export default Screen;