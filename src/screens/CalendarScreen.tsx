import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const CalendarScreen = () => {
  const today = new Date();
  const monthName = today.toLocaleDateString('fr-FR', {month: 'long'});
  const year = today.getFullYear();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Calendrier</Text>
        <Text style={styles.subtitle}>
          {monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}
        </Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Calendrier des événements à venir
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },
  placeholder: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
});

export default CalendarScreen;
