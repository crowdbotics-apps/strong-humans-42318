import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.subtitle}>Last Updated: September 1, 2022</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec nunc tincidunt, id aliquam nisl tincidunt. Sed auctor
          tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed auctor, nunc
          vitae aliquet tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc
          nunc nec nunc. Sed auctor, nunc vitae aliquet tincidunt, nunc nunc
          tincidunt nunc, nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt nunc, nec aliquam nunc nunc nec nunc.
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt nunc,
          nec aliquam nunc nunc nec nunc.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 16
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16
  }
});
export default TermsAndConditionsScreen;