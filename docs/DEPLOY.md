# 🚀 Guide de Déploiement Firebase - Ben.Nutritionniste

Ce guide vous explique comment déployer le site Ben.Nutritionniste sur Firebase Hosting.

## 📋 Prérequis

1. **Node.js** (version 16+) - [Télécharger](https://nodejs.org)
2. **Compte Google** pour Firebase
3. **Projet Firebase** créé sur [console.firebase.google.com](https://console.firebase.google.com)

## 🛠 Installation et Configuration

### Option 1: Déploiement Automatique (Windows)

```bash
# Double-cliquez sur le fichier ou exécutez:
deploy.bat
```

### Option 2: Déploiement avec Node.js (Cross-platform)

```bash
# Exécutez le script de déploiement:
node deploy.js
```

### Option 3: Déploiement Manuel

1. **Installer Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Se connecter à Firebase**
   ```bash
   firebase login
   ```

3. **Initialiser le projet**
   ```bash
   firebase init
   ```
   - Sélectionnez: `Hosting`
   - Choisissez votre projet Firebase
   - Dossier public: `.` (point)
   - Application single-page: `N` (Non)
   - Écraser index.html: `N` (Non)

4. **Déployer**
   ```bash
   firebase deploy
   ```

## 📁 Fichiers de Configuration

### `firebase.json`
Configuration du hosting avec:
- Cache headers optimisés
- Redirections SPA
- URLs propres
- Compression automatique

### `package.json`
Scripts npm disponibles:
- `npm run deploy` - Déploiement complet
- `npm run serve` - Test en local
- `npm run init` - Initialisation Firebase

## 🌐 Après le Déploiement

Votre site sera disponible sur:
- **URL Firebase**: `https://votre-projet.web.app`
- **URL personnalisée**: `https://votre-projet.firebaseapp.com`

## 📊 Commandes Utiles

```bash
# Tester localement
firebase serve

# Déployer uniquement le hosting
firebase deploy --only hosting

# Voir les logs
firebase functions:log

# Ouvrir la console Firebase
firebase open

# Voir les informations du projet
firebase list

# Changer de projet
firebase use --add
```

## 🔧 Configuration Avancée

### Domaine Personnalisé

1. Allez dans la Console Firebase
2. Hosting → Domaine personnalisé
3. Ajoutez votre domaine
4. Suivez les instructions DNS

### Variables d'Environnement

Pour ajouter des variables d'environnement:

```bash
# Exemple pour analytics
firebase functions:config:set analytics.tracking_id="GA-XXXXX"
```

### Headers de Sécurité

Le fichier `firebase.json` inclut déjà des headers optimisés pour:
- Cache des assets (CSS/JS/Images): 1 an
- Cache HTML: 1 heure
- URLs propres sans `.html`

## 🚨 Dépannage

### Erreur: "Firebase CLI not found"
```bash
npm install -g firebase-tools
```

### Erreur: "Not authenticated"
```bash
firebase login
```

### Erreur: "No project selected"
```bash
firebase use --add
```

### Site ne se met pas à jour
```bash
# Forcer le redéploiement
firebase deploy --only hosting --force
```

## 📈 Monitoring

Après déploiement, surveillez:
- **Performance**: Firebase Performance Monitoring
- **Analytics**: Google Analytics (à configurer)
- **Erreurs**: Firebase Crashlytics
- **Trafic**: Firebase Hosting metrics

## 🔐 Sécurité

- Les fichiers sensibles sont exclus via `.gitignore`
- Headers de sécurité configurés
- HTTPS automatique
- Cache optimisé

## 💡 Conseils

1. **Testez toujours localement** avec `firebase serve`
2. **Utilisez des branches** pour les environnements (dev/prod)
3. **Configurez les redirections** pour les anciennes URLs
4. **Optimisez les images** pour de meilleures performances
5. **Activez la compression** (déjà configurée)

---

Pour toute question, contactez: benoit.boulanger.2@ulaval.ca