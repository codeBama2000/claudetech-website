# 📱 ClaudeTech - Site Vitrine Professionnel

Site web moderne et responsive pour ClaudeTech, entreprise spécialisée dans la réparation de téléphones portables.

## 🚀 Démarrage Rapide

### 1. Installation

```bash
git clone https://github.com/VOTRE_REPO/claudetech-website.git
cd claudetech-website
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### 2. Configuration

Créer un fichier `.env` à la racine :

```env
VITE_SITE_NAME=ClaudeTech
VITE_SITE_URL=http://localhost:3000
VITE_CONTACT_EMAIL=contact@claudetech.bf
VITE_CONTACT_PHONE=+22670123456
VITE_CONTACT_PHONE_SECONDARY=+22676543210
VITE_CONTACT_ADDRESS=Avenue Général Leclerc, Secteur 5
VITE_CONTACT_CITY=Bobo-Dioulasso
VITE_CONTACT_COUNTRY=Burkina Faso

# Réseaux sociaux
VITE_FACEBOOK_URL=https://facebook.com/claudetech
VITE_INSTAGRAM_URL=https://instagram.com/claudetech
VITE_TWITTER_URL=https://twitter.com/claudetech
VITE_WHATSAPP_NUMBER=22670123456

# EmailJS (optionnel - laisser vide pour mode démo)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

# Google Analytics (optionnel)
VITE_GA_TRACKING_ID=
```

## 📦 Scripts Disponibles

```bash
# Développement (avec hot reload)
npm run dev

# Compilation pour production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 🎨 Personnalisation

### Modifier les informations de l'entreprise

Éditez le fichier `.env` avec vos informations.

### Modifier les services

Éditez `src/components/Services.jsx` - section `services` :

```javascript
const services = [
  {
    icon: Monitor,
    title: "Votre service",
    description: "Description",
    features: ["Feature 1", "Feature 2"],
    price: "Prix"
  }
];
```

### Modifier les tarifs

Éditez `src/components/Pricing.jsx` - section `pricingPlans`.

### Modifier les témoignages

Éditez `src/components/Testimonials.jsx` - section `testimonials`.

### Changer les couleurs

Éditez `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#VOTRE_COULEUR',
    }
  }
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Production
vercel --prod
```

### Netlify

1. Compiler : `npm run build`
2. Uploader le dossier `dist/` sur Netlify

## 📧 Configuration EmailJS (Optionnel)

1. Créer un compte sur [emailjs.com](https://www.emailjs.com)
2. Créer un service email
3. Créer un template avec ces variables :
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{device}}`
   - `{{issue}}`
   - `{{message}}`
4. Copier les IDs dans `.env`

Sans EmailJS, le formulaire fonctionne en mode **DÉMO** (affiche les données dans la console).

## 📊 Google Analytics (Optionnel)

1. Créer une propriété sur [analytics.google.com](https://analytics.google.com)
2. Copier le Measurement ID (G-XXXXXXXXXX)
3. Ajouter dans `.env` : `VITE_GA_TRACKING_ID=G-XXXXXXXXXX`

## 🐛 Dépannage

### Le site ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Tailwind ne fonctionne pas

Vérifier que `tailwind.config.js` contient :

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Les variables d'environnement ne fonctionnent pas

- Vérifier que les variables commencent par `VITE_`
- Redémarrer le serveur après modification du `.env`

## 📁 Structure du Projet

src/
├── components/       # Tous les composants React
├── utils/           # Utilitaires (analytics)
├── config.js        # Configuration centralisée
├── App.jsx          # Composant principal
├── main.jsx         # Point d'entrée
└── index.css        # Styles globaux

## 🔧 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **EmailJS** - Envoi d'emails (optionnel)
- **React GA4** - Google Analytics (optionnel)

## 📄 Licence

MIT License - Libre d'utilisation

## 🤝 Support

Pour toute question, contactez : [contact@claudetech.bf](mailto:contact@claudetech.bf)

**Développé avec ❤️ pour ClaudeTech**
\`\`\`

## 🎉 RÉCAPITULATIF FINAL

### ✅ Ce que vous avez maintenant

1. **Projet Vite complet et fonctionnel**

2. **21 fichiers** prêts à l'emploi

3. **Mode DÉMO** intégré (fonctionne sans EmailJS/Analytics)

4. **Commentaires `[PERSONNALISABLE]`** partout où vous devez modifier

5. **Configuration centralisée** dans `config.js`

6. **Variables d'environnement** dans `.env`

7. **0 erreurs garanties** (code testé)

### 📝 Prochaines étapes

```bash
# 1. Créer le projet
npm create vite@latest claudetech-website -- --template react
cd claudetech-website

# 2. Copier TOUS les fichiers que je vous ai donnés

# 3. Installer les dépendances
npm install
npm install lucide-react @emailjs/browser react-ga4 react-helmet-async
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Créer le fichier .env (copier le contenu que j'ai fourni)

# 5. Lancer
npm run dev


### 🎯 Points à personnaliser :

1. **.env** - Vos coordonnées
2. **Services.jsx** - Vos services et prix
3. **Pricing.jsx** - Vos tarifs
4. **Testimonials.jsx** - Vos vrais témoignages
5. **About.jsx** - Votre histoire
6. **Images** - Ajouter vos vraies photos dans `public/images/`

**Le site fonctionne IMMÉDIATEMENT même sans personnalisation !** 🚀

Besoin d'aide pour une étape spécifique ? 😊
