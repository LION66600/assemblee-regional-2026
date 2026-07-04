# Assemblée Régionale 2026

Application mobile cross-platform (iOS & Android) développée avec **React Native**.

## 🚀 Stack Technologique

- **Framework**: React Native 0.73+
- **Langage**: TypeScript
- **Navigation**: React Navigation
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Testing**: Jest
- **Linting**: ESLint + Prettier

## 📱 Fonctionnalités

- [ ] Authentification des utilisateurs
- [ ] Liste des assemblées régionales
- [ ] Détails des sessions
- [ ] Calendrier des événements
- [ ] Notifications push
- [ ] Profil utilisateur

## 🛠️ Installation & Configuration

### Prérequis
- Node.js >= 18
- npm >= 9
- Xcode (pour iOS)
- Android Studio (pour Android)

### Installation

```bash
# Cloner le repository
git clone https://github.com/LION66600/assemblee-regional-2026.git
cd assemblee-regional-2026

# Installer les dépendances
npm install

# Installer les pods iOS
cd ios && pod install && cd ..
```

### Lancer l'app

**Sur iOS:**
```bash
npm run ios
```

**Sur Android:**
```bash
npm run android
```

**Démarrer le Metro bundler:**
```bash
npm start
```

## 📁 Structure du Projet

```
.
├── src/
│   ├── screens/          # Écrans de l'app
│   ├── components/       # Composants réutilisables
│   ├── services/         # Services API
│   ├── store/            # State management (Zustand)
│   ├── utils/            # Utilitaires
│   ├── navigation/       # Configuration navigation
│   ├── types/            # Types TypeScript
│   └── App.tsx           # Point d'entrée principal
├── ios/                  # Configuration iOS
├── android/              # Configuration Android
├── package.json
├── tsconfig.json
├── .eslintrc.json
└── README.md
```

## 🧪 Tests

```bash
# Lancer les tests
npm test

# Lancer les tests en mode watch
npm test -- --watch

# Vérifier la couverture
npm test -- --coverage
```

## 📝 Linting & Formatting

```bash
# Vérifier le linting
npm run lint

# Formater le code
npm run format
```

## 🌍 Variables d'Environnement

Créez un fichier `.env` à la racine du projet:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=development
```

## 📚 Documentation Utile

- [React Native Documentation](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [TypeScript](https://www.typescriptlang.org)

## 🤝 Contribution

1. Créer une branche feature (`git checkout -b feature/amazing-feature`)
2. Commiter les changements (`git commit -m 'Add amazing feature'`)
3. Push vers la branche (`git push origin feature/amazing-feature`)
4. Ouvrir une Pull Request

## 📄 License

Ce projet est sous license MIT.

## 👤 Auteur

**LION66600**

---

**Dernière mise à jour**: 2026-07-04