# 🎨 Déjà Vu - Site Web Refonte Complète

## 📋 Vue d'ensemble

Site web moderne et élégant pour **Déjà Vu**, un groupe d'experts offrant des services dans l'immobilier, la conciergerie et la collection d'objets d'art.

## 🚀 Fonctionnalités

### ✨ Pages
- **Landing Page** (`index.html`) - Page d'accueil avec navigation vers les 3 sections principales
- **Home** (`home.html`) - Immobilier et découverte du monde Déjà Vu
- **Services** (`services.html`) - Services de conciergerie sur mesure
- **Collection** (`collection.html`) - Objets d'art et horlogerie de prestige

### 🎯 Caractéristiques Techniques
- **Design Responsive** - S'adapte à tous les écrans (mobile, tablette, desktop)
- **HTML5 Sémantique** - Code propre et accessible
- **CSS3 Moderne** - Variables CSS, Grid, Flexbox, animations fluides
- **JavaScript Vanilla** - Performances optimales sans dépendances
- **Navigation Intuitive** - Menu sticky, smooth scroll, navigation active
- **Animations** - Scroll reveal, hover effects, transitions élégantes
- **Accessibilité** - Navigation au clavier, skip links, ARIA labels
- **SEO Optimisé** - Meta tags, structure sémantique

## 📁 Structure du Projet

```
DejaVu/Code/
├── index.html          # Landing page principale
├── home.html           # Page immobilier
├── services.html       # Page services conciergerie
├── collection.html     # Page objets d'art
├── css/
│   └── style.css       # Styles globaux et responsive
├── js/
│   └── main.js         # Interactions JavaScript
└── images/             # Dossier pour les images
```

## 🎨 Palette de Couleurs

- **Bleu Primary**: `#4169E1` - Section Home
- **Rouge Primary**: `#c41e3a` - Section Services
- **Orange Primary**: `#f39c12` - Section Collection
- **Gris Foncé**: `#2c3e50` - Header/Footer
- **Gris Clair**: `#ecf0f1` - Backgrounds

## 🔧 Installation

1. Aucune installation nécessaire - HTML/CSS/JS pur
2. Ouvrez simplement `index.html` dans un navigateur moderne
3. Pour un serveur local (optionnel):
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx serve
   ```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎭 Fonctionnalités JavaScript

- **Menu Mobile** - Menu hamburger responsive
- **Smooth Scroll** - Navigation fluide entre sections
- **Hero Slider** - Carrousel d'images automatique
- **Scroll Reveal** - Animations au défilement
- **Lightbox Gallery** - Galerie d'images avec lightbox
- **Active Navigation** - Indication de la page active
- **Form Validation** - Validation des formulaires
- **Lazy Loading** - Chargement optimisé des images

## 🌐 Compatibilité Navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Opera (dernières versions)

## 📝 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css`:
```css
:root {
    --color-primary-blue: #4169E1;
    --color-primary-red: #c41e3a;
    --color-primary-orange: #f39c12;
}
```

### Ajouter des images
Placez vos images dans le dossier `images/` et mettez à jour les sources dans les fichiers HTML.

### Modifier le contenu
Éditez directement les fichiers HTML pour personnaliser les textes et structures.

## 🚀 Optimisations

- **CSS minifié** pour la production (à faire)
- **JavaScript minifié** pour la production (à faire)
- **Images optimisées** WebP/AVIF recommandé
- **Service Worker** pour PWA (préparé dans le code)

## 📧 Contact

Pour toute question concernant le site:
- Email: contact@dejavu.ch
- Site: www.deja-vu.switzerlandch

## 📄 Licence

© Copyright 2018 - Déjà Vu Switzerland

---

**Développé avec ❤️ pour Déjà Vu**
