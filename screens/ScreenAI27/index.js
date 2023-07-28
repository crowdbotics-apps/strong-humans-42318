import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const senderEmail = 'example@example.com';

  const handleSendFeedback = () => {
    // Send feedback logic
    console.log(feedbackText);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.emailText}>{senderEmail}</Text>
      <TextInput style={styles.input} placeholder="Enter your feedback" onChangeText={text => setFeedbackText(text)} value={feedbackText} multiline />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  emailText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default FeedbackScreen;