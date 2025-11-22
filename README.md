# Appscrip Task - Product Listing Page

A modern, responsive product listing page built with Next.js, featuring Server Side Rendering (SSR), SEO optimization, and mobile-first design.

## Features

- ✅ Server Side Rendering (SSR) with Next.js `getServerSideProps`
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ SEO optimized (meta tags, schema markup, semantic HTML)
- ✅ Product filtering and sorting functionality
- ✅ Clean code structure with TypeScript
- ✅ Minimal dependencies (only Next.js and React)
- ✅ Optimized DOM structure
- ✅ Accessible components with ARIA labels

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Netlify

This project is configured for deployment on Netlify.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/Appscrip-task-yourname.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will automatically detect Next.js and use the settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Repository Naming**
   - Repository must be named: `Appscrip-task-[candidate-name]`
   - Example: `Appscrip-task-john-doe`

## Project Structure

```
├── pages/
│   ├── index.tsx          # Main product listing page (SSR)
│   └── _app.tsx           # App wrapper
├── components/
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── ProductGrid.tsx    # Product grid component
│   ├── FilterSidebar.tsx  # Filter sidebar component
│   └── ProductCard.tsx    # Individual product card
├── styles/
│   └── globals.css        # Global styles (no CSS framework)
├── types/
│   └── product.ts         # TypeScript types
├── public/
│   └── images/            # Product images directory
├── netlify.toml           # Netlify deployment configuration
└── next.config.js        # Next.js configuration
```

## Code Quality Features

- **Code Structure**: Modular component architecture with clear separation of concerns
- **Naming Convention**: Consistent camelCase for variables, PascalCase for components
- **Minimal Dependencies**: Only Next.js, React, and TypeScript (no CSS frameworks)
- **Screen Size Fit**: Responsive breakpoints at 480px, 768px, and 1024px
- **Min DOM Size**: Efficient rendering with minimal DOM nodes

## SEO Features

- **Page Title**: Descriptive title tag with brand name
- **Page Description**: Meta description with keywords
- **H1 & H2 Tags**: Proper heading hierarchy (H1 for main title, H2 for sections)
- **Schema Settings**: JSON-LD structured data for products and organization
- **SEO-Friendly Image Names**: Descriptive filenames (e.g., `backpack-grey.jpg`)
- **Alt Text**: Descriptive alt attributes for all images
- **Server-Side Rendering**: All content rendered on server for better crawlability

## Technologies Used

- **Next.js 14**: React framework with SSR support
- **React 18**: UI library
- **TypeScript**: Type safety
- **CSS**: Custom styles (no frameworks)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Appscrip task evaluation.

