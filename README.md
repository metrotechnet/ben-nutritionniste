# Ben Nutritionniste - Website

Modern, responsive website for sports nutrition specialist Benoît Boulanger.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Fast loading with optimized assets and animations
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Interactive**: Smooth animations and user-friendly navigation
- **Instagram Integration**: Live connection to @ben.nutritionniste profile

## 📁 Project Structure

```
ben.nutritionniste/
├── css/
│   └── styles.css          # Main stylesheet with modern CSS
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   └── images/            # Website images and photos
├── scripts/
│   └── deploy*.bat        # Deployment scripts
├── docs/
│   └── README.md          # This documentation
├── index.html             # Main HTML file
├── firebase.json          # Firebase hosting configuration
└── deploy.bat             # Main deployment script
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with:
  - CSS Custom Properties (Variables)
  - CSS Grid & Flexbox
  - Animations & Transitions
  - Glassmorphism effects
  - Responsive design
- **JavaScript ES6+**: Interactive features:
  - Smooth scrolling
  - Intersection Observer API
  - Form handling
  - Instagram integration
- **Firebase Hosting**: Fast, secure hosting platform

## 🎨 Design System

### Colors
- **Primary**: `#00D2FF` (Cyan Blue)
- **Primary Dark**: `#0099CC`
- **Secondary**: `#FF6B6B` (Coral)
- **Accent**: `#4ECDC4` (Turquoise)
- **Success**: `#51CF66` (Green)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
- Glassmorphism cards with backdrop-filter
- Gradient backgrounds
- Smooth hover animations
- Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js (for Firebase CLI)
- Firebase CLI installed globally
- Git (optional)

### Local Development
1. Clone or download the project
2. Open `index.html` in a browser
3. For live preview, use a local server (Live Server extension in VS Code)

### Deployment
1. Run the main deployment script:
   ```bash
   deploy.bat
   ```
2. Or deploy manually:
   ```bash
   firebase deploy --only hosting
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Firebase Setup
The project is configured for Firebase hosting with:
- Project ID: `ben-nutritionniste`
- Public directory: `.` (root)
- Single-page app: No
- Automatic builds: No

### Instagram Integration
The Instagram section connects to `@ben.nutritionniste` profile.
Update the handle in `js/main.js` if needed:
```javascript
window.open('https://instagram.com/ben.nutritionniste', '_blank');
```

## 📊 Performance Features

- **Optimized Images**: Compressed and properly sized
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: 60fps animations with CSS transforms
- **Efficient JavaScript**: Throttled scroll events and optimized DOM queries
- **Clean Code**: Modular, well-documented code structure

## 🎯 SEO Features

- Semantic HTML5 structure
- Meta tags and descriptions
- OpenGraph tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 📞 Support & Contact

For technical support or website updates:
- **Email**: contact@ben-nutritionniste.fr
- **Instagram**: [@ben.nutritionniste](https://instagram.com/ben.nutritionniste)

## 📄 License

This project is proprietary and confidential.
© 2024 Ben Nutritionniste. All rights reserved.

---

**Version**: 2.0.0  
**Last Updated**: December 2024  
**Deployed At**: https://ben-nutritionniste.web.app