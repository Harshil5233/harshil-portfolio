# 🚀 Harshil Shah - Cinematic Portfolio

A professional, sci-fi-inspired portfolio website showcasing cloud computing, AI development, and automation expertise. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Cinematic Design**: Futuristic UI with smooth animations and theme switching
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Theme Toggle**: Dark/Light mode with gradient backgrounds
- **Interactive**: Scroll-triggered animations and hover effects
- **Performance**: Optimized for fast loading and SEO
- **Professional**: Clean code structure ready for deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready configuration

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Harshil5233/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Environment Setup

```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your configuration
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🌐 Vercel Deployment

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically with zero configuration

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 🎨 Theme Toggle Usage

The portfolio includes a professional dark/light theme system:

- **Toggle Button**: Located in the header (sun/moon icon)
- **Automatic**: Remembers user preference
- **Responsive**: Works across all devices
- **Smooth**: Animated transitions between themes

### Theme Colors

**Dark Theme:**
- Background: Deep space navy
- Accent: Neon cyan
- Text: Soft cyan

**Light Theme:**
- Background: Gradient blue
- Accent: Aqua blue
- Text: Dark gray

## 📁 Project Structure

```
├── components/           # React components
│   ├── Header.tsx       # Navigation with theme toggle
│   ├── HeroSection.tsx  # Main hero section
│   ├── AboutSection.tsx # About with animated timeline
│   ├── ExperienceTimeline.tsx # Work & education
│   ├── SkillsChart.tsx  # Animated skill bars
│   └── ...
├── app/                 # Next.js 14 app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── lib/                # Utilities
└── public/             # Static assets
```

## 🎯 Customization

### Personal Information

Update your details in the components:
- `HeroSection.tsx` - Name and title
- `AboutSection.tsx` - Personal story
- `ExperienceTimeline.tsx` - Work history
- `SkillsChart.tsx` - Technical skills

### Styling

Modify colors and themes in:
- `tailwind.config.js` - Color palette
- `app/globals.css` - Custom styles
- `components/ThemeProvider.tsx` - Theme logic

### Content

All content is component-based for easy updates:
- Skills percentages in `SkillsChart.tsx`
- Project details in `CinematicProjects.tsx`
- Contact information in `CinematicContact.tsx`

## 📧 Contact Integration

The contact form is ready for integration with:
- EmailJS
- Netlify Forms
- Custom API endpoints

## 🔧 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with tree shaking
- **Loading**: Lazy loading and optimized assets

## 📱 Mobile Support

- Touch-friendly interactions
- Responsive breakpoints
- Mobile-optimized animations
- Swipe gestures support

## 🚀 Deployment Checklist

- [ ] Update personal information
- [ ] Test theme toggle functionality
- [ ] Verify responsive design
- [ ] Check all links and CTAs
- [ ] Optimize images and assets
- [ ] Test contact form integration
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the excellent framework
- **Tailwind CSS** for rapid styling
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment

---

**Built with ⚡ by Harshil Shah**

*Ready to create something amazing together? [Let's connect!](mailto:2405102070004@paruluniversity.ac.in)*