import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const DoctorAppointmentScreen = () => {
  const appointmentLogs = [{
    date: '2022-10-01',
    title: 'Appointment 1',
    description: 'Short description for appointment 1'
  }, {
    date: '2022-10-02',
    title: 'Appointment 2',
    description: 'Short description for appointment 2'
  }, {
    date: '2022-10-03',
    title: 'Appointment 3',
    description: 'Short description for appointment 3'
  }];
  return <SafeAreaView style={styles.container}>
      {appointmentLogs.map((log, index) => <View key={index} style={styles.logContainer}>
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
    marginBottom: 4
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 12,
    marginBottom: 8
  },
  detailsButton: {
    fontSize: 12,
    color: 'blue'
  }
});
export default DoctorAppointmentScreen;