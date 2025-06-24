# Marketing Website - React TypeScript Application

A modern, responsive marketing website built with React, TypeScript, Vite, and Tailwind CSS. This application features a conversion-optimized design with smooth animations, responsive layouts, and comprehensive marketing sections.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Marketing Focused**: Hero section, features, testimonials, pricing, blog, and contact
- **Performance Optimized**: Fast loading with Vite and optimized images
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Custom Hooks**: Debounced search and form handling
- **Smooth Animations**: CSS animations and transitions for enhanced UX

## 📁 Project Structure

```
marketing-website/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # Reusable UI components
│   │   ├── sections/    # Page sections (Hero, Features, etc.)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useDebounce.ts
│   ├── pages/           # Page components
│   │   └── Home.tsx
│   ├── routes/          # React Router configuration
│   │   └── index.tsx
│   ├── styles/          # Global styles
│   │   └── globals.css
│   ├── types/           # TypeScript type definitions
│   │   └── index.d.ts
│   ├── App.tsx          # Root component
│   └── main.tsx         # Vite entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   cd marketing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Branding

The application uses a custom color palette defined in `tailwind.config.js`. To customize:

1. **Primary Colors**: Update the `primary` color palette in the Tailwind config
2. **Secondary Colors**: Modify the `secondary` color palette
3. **Logo**: Replace the logo in the Navbar component
4. **Brand Name**: Update "Marketing Pro" throughout the application

### Content

All content is defined in the component files:

- **Hero Section**: `src/components/sections/HeroSection.tsx`
- **Features**: `src/components/sections/FeaturesSection.tsx`
- **Testimonials**: `src/components/sections/TestimonialsSection.tsx`
- **Pricing**: `src/components/sections/PricingSection.tsx`
- **Blog**: `src/components/sections/BlogSection.tsx`
- **Contact**: `src/components/sections/ContactSection.tsx`

### Styling

All styles are centralized in `src/styles/globals.css` using Tailwind CSS:

- **Component Classes**: Pre-defined component classes (`.btn`, `.card`, etc.)
- **Animations**: Custom animations and transitions
- **Responsive Design**: Mobile-first responsive utilities

## 🔧 Technical Details

### TypeScript

The application is fully typed with TypeScript:

- **Component Props**: Defined in `src/types/index.d.ts`
- **Data Structures**: Interfaces for features, testimonials, pricing, etc.
- **Strict Mode**: Enabled for better type safety

### Performance

- **Lazy Loading**: Images are lazy-loaded for better performance
- **Debounced Inputs**: Form inputs use debouncing to reduce API calls
- **Optimized Builds**: Vite provides fast builds and hot module replacement

### Accessibility

- **Semantic HTML**: Proper HTML5 semantic elements
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review the code comments for implementation details

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
# Marketing
