# 🚀 Guide d'Installation - Assemblée Régionale 2026

## 📋 Prérequis

Assurez-vous d'avoir installé :

- **Node.js** >= 18 ([télécharger](https://nodejs.org))
- **npm** >= 9 (livré avec Node.js)
- **Git** ([télécharger](https://git-scm.com))
- **Xcode** (pour iOS) - [Mac App Store](https://apps.apple.com/app/xcode/id497799835)
- **Android Studio** (pour Android) - [télécharger](https://developer.android.com/studio)

## 📥 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/LION66600/assemblee-regional-2026.git
cd assemblee-regional-2026
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Installer les pods iOS

```bash
cd ios
pod install
cd ..
```

### 4. Démarrer le Metro Bundler

```bash
npm start
```

Laissez ce terminal ouvert.

## 🎮 Lancer l'application

### Sur iOS (Simulateur)

Dans un **nouveau terminal** :

```bash
npm run ios
```

Ou avec Make :
```bash
make ios
```

### Sur Android (Émulateur)

Assurez-vous que l'émulateur Android est lancé, puis :

```bash
npm run android
```

Ou avec Make :
```bash
make android
```

## 🛠️ Commandes Utiles

### Avec Make

```bash
make help        # Voir toutes les commandes
make install     # Installer les dépendances
make start       # Démarrer Metro bundler
make ios         # Lancer sur iOS
make android     # Lancer sur Android
make test        # Lancer les tests
make lint        # Vérifier la qualité du code
make format      # Formater le code
make clean       # Nettoyer les fichiers de build
```

### Avec npm

```bash
npm install      # Installer les dépendances
npm start        # Démarrer Metro bundler
npm run ios      # Lancer sur iOS
npm run android  # Lancer sur Android
npm test         # Lancer les tests
npm run lint     # Vérifier la qualité du code
npm run format   # Formater le code
```

## 📂 Structure du Projet

```
root/
├── src/
│   ├── App.tsx                    # Point d'entrée principal
│   ├── navigation/                # Configuration de navigation
│   │   └── RootNavigator.tsx      # Navigateur racine
│   ├── screens/                   # Écrans de l'application
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── AssemblyDetailScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── components/                # Composants réutilisables
│   ├── services/                  # Services API
│   │   └── api.ts
│   ├── store/                     # État global (Zustand)
│   │   └── useAuthStore.ts
│   ├── types/                     # Types TypeScript
│   │   └── index.ts
│   └── utils/                     # Fonctions utilitaires
│       └── helpers.ts
├── ios/                           # Configuration iOS
├── android/                       # Configuration Android
├── package.json                   # Dépendances npm
├── tsconfig.json                  # Configuration TypeScript
├── babel.config.js                # Configuration Babel
├── metro.config.js                # Configuration Metro bundler
├── jest.config.js                 # Configuration Jest
├── .eslintrc.json                 # Configuration ESLint
├── .prettierrc.json               # Configuration Prettier
├── Makefile                       # Commandes Make
├── app.json                       # Métadonnées de l'app
├── index.js                       # Point d'entrée
└── README.md                      # Documentation
```

## 🔧 Configuration de l'API

### Créer le fichier `.env`

```bash
cp .env.example .env
```

Editer `.env` :

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=development
REACT_APP_DEBUG=true
```

## 🧪 Tester l'Application

### Authentification de test

**Email :** user@example.com  
**Mot de passe :** password123

Note: L'authentification est actuellement en simulation. À intégrer avec votre API.

## 🐛 Dépannage

### Erreur: "Unable to resolve module"

```bash
rm -rf node_modules
npm install
```

### Erreur sur iOS

```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Erreur sur Android

```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Ports en conflit

Si le port 8081 est occupé :

```bash
npm start -- --port 8082
```

## 📚 Documentation

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [TypeScript](https://www.typescriptlang.org)
- [Axios](https://axios-http.com)

## 🤝 Contribution

1. Créer une branche feature
   ```bash
   git checkout -b feature/ma-feature
   ```

2. Commiter les changements
   ```bash
   git commit -m 'Add: Ma nouvelle feature'
   ```

3. Pousser la branche
   ```bash
   git push origin feature/ma-feature
   ```

4. Créer une Pull Request sur GitHub

## 📧 Support

Pour les questions ou problèmes, ouvrez une issue sur GitHub.

---

**Dernière mise à jour :** 2026-07-04
