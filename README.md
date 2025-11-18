# EdgeLink Web

A modern, responsive product website for EdgeLink - a smart edge gateway that connects legacy energy infrastructure to cloud-native systems.

## 🌟 Overview

EdgeLink is a smart edge gateway that bridges the gap between legacy energy assets (chargers, inverters, meters) and modern cloud-native systems. This website showcases the product's capabilities, architecture, and use cases.

## ✨ Features

- **Modern Design**: Built with Material-UI and Montserrat typography
- **EdgeLink Brand Identity**: Custom color palette featuring EdgeLink blue (#0077FF) and teal (#21C7C8)
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Section Navigation**: Top navigation bar with links to key sections
- **Single Page Application**: Fast, seamless navigation

## 🎨 Design System

### Colors
- **Primary Blue**: `#0077FF` - Main brand color
- **Navy Accent**: `#003B73` - Deep blue for contrast
- **Teal Accent**: `#21C7C8` - Highlight color
- **Success Green**: `#21C784`
- **Warning Orange**: `#FFB020`
- **Danger Red**: `#FF4D4F`

### Typography
- **Primary Font**: Montserrat Variable
- **Secondary Font**: Barlow (for headings)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Development Server

The development server will start at `http://localhost:3031`

Navigate to `/product` to view the EdgeLink product page.

## 📁 Project Structure

```
edgelink-web/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components
│   │   └── simple/
│   │       └── product-layout.jsx  # Product page layout
│   ├── pages/           # Page components
│   │   └── product.jsx  # Product page entry
│   ├── sections/        # Page sections
│   │   └── product/     # Product page sections
│   │       ├── product-hero.jsx
│   │       ├── product-problem.jsx
│   │       ├── product-solution.jsx
│   │       ├── product-capabilities.jsx
│   │       ├── product-architecture.jsx
│   │       ├── product-use-cases.jsx
│   │       └── product-contact.jsx
│   ├── theme/           # Theme configuration
│   │   ├── theme-config.js      # Brand colors & fonts
│   │   └── core/
│   │       └── palette.js       # Color palette
│   ├── routes/          # Routing configuration
│   ├── global.css       # Global styles
│   └── main.jsx         # Application entry point
├── public/              # Public assets
├── EDGELINK_BRAND.md   # Brand identity documentation
└── package.json
```

## 🎯 Key Sections

### Product Page (`/product`)

1. **Hero Section**
   - Main value proposition
   - Call-to-action buttons
   - Key benefits overview

2. **The Problem**
   - Legacy infrastructure challenges
   - Visual card-based layout
   - Missing capabilities highlighted

3. **The Solution**
   - EdgeLink features grid
   - Solution overview
   - Value proposition

4. **Key Capabilities**
   - 7 core capabilities
   - Interactive cards with hover effects

5. **Technical Architecture**
   - Hardware specifications
   - Software stack
   - Security features

6. **Use Cases**
   - Real-world applications
   - "How It Works" workflow
   - Industry-specific examples

7. **Contact & About**
   - Company information
   - Contact details
   - Call-to-action

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **UI Library**: Material-UI v7
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Iconify
- **Fonts**: Montserrat Variable, Barlow

## 📝 Scripts

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Production build

# Preview
npm run start           # Preview production build

# Linting
npm run lint            # Check for linting errors
npm run lint:fix        # Fix linting errors

# Formatting
npm run fm:check        # Check code formatting
npm run fm:fix          # Fix code formatting
npm run fix:all         # Fix linting and formatting

# Clean
npm run clean           # Remove build artifacts
npm run re:build        # Clean and rebuild
```

## 🎨 Customization

### Updating Brand Colors

Edit `src/theme/theme-config.js`:

```javascript
palette: {
  primary: {
    main: '#0077FF',  // Your primary color
    dark: '#003B73',  // Your dark variant
    // ...
  }
}
```

### Updating Typography

Edit `src/theme/theme-config.js`:

```javascript
fontFamily: {
  primary: 'Montserrat Variable',
  secondary: 'Barlow',
}
```

### Adding New Sections

1. Create a new component in `src/sections/product/`
2. Import it in `src/sections/product/view/product-view.jsx`
3. Add it to the layout stack

## 📱 Responsive Breakpoints

- **xs**: 0px - 600px (Mobile)
- **sm**: 600px - 900px (Tablet)
- **md**: 900px - 1200px (Desktop)
- **lg**: 1200px - 1536px (Large Desktop)
- **xl**: 1536px+ (Extra Large)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Documentation

- [EDGELINK_BRAND.md](./EDGELINK_BRAND.md) - Brand identity, colors, and typography guide

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and formatting
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

For questions or support, contact:
- **Email**: info@nubificus.co.uk
- **Website**: https://nubificus.co.uk
- **GitHub**: https://github.com/nubificus

## 📜 License

Copyright © Nubificus Ltd. All rights reserved.

---

Built with ❤️ by Nubificus
