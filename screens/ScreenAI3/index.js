import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {// Handle sign up logic here
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheck}>
          <View style={styles.checkbox}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI4");
        }}><Text style={styles.linkText}>Terms and Conditions</Text></Pressable> and{' '}
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI5");
        }}><Text style={styles.linkText}>Privacy Policy</Text></Pressable>
        </Text>
      </View>
      <TouchableOpacity onPress={() => {
      navigation.navigate("ScreenAI6");
    }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  checkmark: {
    color: '#007AFF',
    fontSize: 14
  },
  checkboxText: {
    fontSize: 14
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline'
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline'
  }
});
export default SignUpScreen;