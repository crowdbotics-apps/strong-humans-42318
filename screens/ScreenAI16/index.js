import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const DailyLogsScreen = () => {
  const dailyLogs = [{
    id: 1,
    date: 'June 1, 2022',
    title: 'Log 1',
    description: 'Short description for log 1'
  }, {
    id: 2,
    date: 'June 2, 2022',
    title: 'Log 2',
    description: 'Short description for log 2'
  }, {
    id: 3,
    date: 'June 3, 2022',
    title: 'Log 3',
    description: 'Short description for log 3'
  }];
  return <SafeAreaView style={styles.container}>
      {dailyLogs.map(log => <View key={log.id} style={styles.logContainer}>
          <Text style={styles.date}>{log.date}</Text>
          <Text style={styles.title}>{log.title}</Text>
          <Text style={styles.description}>{log.description}</Text>
          <Text style={styles.detailsButton}>See details</Text>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  logContainer: {
    marginBottom: 16
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  detailsButton: {
    fontSize: 16,
    color: 'blue'
  }
});
export default DailyLogsScreen;