# Vinay Sharma - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring smooth animations, dark mode support, and a clean, professional design.

## Features

- **Modern Design**: Ultra-clean, 2025-level design with smooth animations and transitions
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Performance Optimized**: Static generation for fast page loads
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## Pages

1. **Home** - Hero section with animated introduction and CTA buttons
2. **About** - Professional background, core values, and skill set
3. **Projects** - Featured projects with descriptions and links
4. **Experience** - Career timeline with achievements
5. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── projects/        # Projects page
│   ├── experience/      # Experience page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # UI components
│   ├── navigation.tsx  # Navigation bar
│   ├── footer.tsx      # Footer
│   └── particles-background.tsx
├── lib/                # Utility functions
└── public/             # Static assets
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in page components
2. Replace project data in `app/projects/page.tsx`
3. Update experience timeline in `app/experience/page.tsx`
4. Modify social links in `app/contact/page.tsx`
5. Adjust color scheme in `tailwind.config.js` and `app/globals.css`

## License

MIT License - feel free to use this template for your own portfolio!
