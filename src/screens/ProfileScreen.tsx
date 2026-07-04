import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useAuthStore} from '@store/useAuthStore';

const ProfileScreen = () => {
  const {user, logout} = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mon Profil</Text>

        {user ? (
          <View style={styles.userCard}>
            <Text style={styles.label}>Nom:</Text>
            <Text style={styles.value}>{user.name}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>

            <Text style={styles.label}>Membre depuis:</Text>
            <Text style={styles.value}>
              {new Date(user.createdAt).toLocaleDateString('fr-FR')}
            </Text>
          </View>
        ) : (
          <Text style={styles.noUser}>Utilisateur non connecté</Text>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Se déconnecter</Text>
        </TouchableOpacity>
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
    marginBottom: 25,
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 25,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
    marginTop: 10,
  },
  value: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  noUser: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
