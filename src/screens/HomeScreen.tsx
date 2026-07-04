import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Assembly} from '@/types';

const HomeScreen = ({navigation}: any) => {
  const [assemblies, setAssemblies] = useState<Assembly[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const mockData: Assembly[] = [
      {
        id: '1',
        name: 'Île-de-France',
        region: 'Île-de-France',
        description: 'Assemblée régionale d\'Île-de-France',
        sessions: [],
      },
      {
        id: '2',
        name: 'Provence-Alpes-Côte d\'Azur',
        region: 'PACA',
        description: 'Assemblée régionale PACA',
        sessions: [],
      },
      {
        id: '3',
        name: 'Auvergne-Rhône-Alpes',
        region: 'AURA',
        description: 'Assemblée régionale AURA',
        sessions: [],
      },
    ];
    setAssemblies(mockData);
    setLoading(false);
  }, []);

  const renderAssembly = ({item}: {item: Assembly}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('AssemblyDetail', {assembly: item})
      }>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardRegion}>{item.region}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={assemblies}
        renderItem={renderAssembly}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  cardRegion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});

export default HomeScreen;
