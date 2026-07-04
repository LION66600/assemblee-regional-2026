import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Assembly} from '@/types';

const AssemblyDetailScreen = ({route}: any) => {
  const {assembly} = route.params as {assembly: Assembly};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{assembly.name}</Text>
        <Text style={styles.region}>{assembly.region}</Text>
        <Text style={styles.description}>{assembly.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sessions</Text>
          {assembly.sessions.length > 0 ? (
            assembly.sessions.map((session) => (
              <View key={session.id} style={styles.sessionCard}>
                <Text style={styles.sessionTitle}>{session.title}</Text>
                <Text style={styles.sessionDate}>{session.date}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noSessions}>Aucune session programmée</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  region: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 25,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  sessionCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  sessionDate: {
    fontSize: 13,
    color: '#999',
  },
  noSessions: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default AssemblyDetailScreen;
