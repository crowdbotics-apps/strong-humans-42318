import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec nunc tincidunt, id aliquam nisl tincidunt. Sed auctor
          tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed auctor, nunc
          vitae aliquet tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc
          nunc nec nunc. Sed auctor, nunc vitae aliquet tincidunt, nunc nunc
          tincidunt nunc, nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.text}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.text}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    flex: 1
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default PrivacyPolicyScreen;