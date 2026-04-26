# Rishabh Singh - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, showcasing a full-stack developer's projects, skills, and experience.

## Features

✨ **Modern Design**
- Gradient-based dark theme with purple and pink accent colors
- Smooth animations and hover effects
- Fully responsive design (mobile, tablet, desktop)
- Accessibility-first approach

🎯 **Core Sections**
- **Hero Section**: Compelling introduction with clear CTAs
- **Featured Projects**: 6 highlighted GitHub projects with descriptions
- **About Me**: Professional background and key achievements
- **Skills**: Categorized technical expertise
- **Contact**: Multiple ways to get in touch
- **Social Links**: GitHub, LinkedIn, Email, Instagram

⚡ **Performance**
- Built with Next.js 15+ for optimized performance
- Tailwind CSS for efficient styling
- Lightweight and fast loading
- 90+ Lighthouse scores

📊 **Vercel Analytics**
- Web Vitals monitoring
- Performance tracking
- Error reporting
- Analytics dashboard

## Tech Stack

- **Frontend Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Icons & Fonts**: Google Fonts
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (with Vercel CLI)
vercel deploy
```

## Deployment to Vercel

This portfolio is optimized for deployment on Vercel, the creator of Next.js.

### Option 1: Git Push (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel will auto-deploy on push
```

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Featured Projects

1. **DevNexus-Answers** - AI-powered Q&A over codebases (TypeScript | LLM)
2. **NexHood-IQ** - Neighborhood intelligence platform (JavaScript | Real Estate)
3. **Taskflow** - Task management system (TypeScript | Full-Stack)
4. **Notion Clone** - Document management platform (TypeScript | Collaboration)
5. **Real-Time Chat** - WebSocket-based messaging (JavaScript | Backend)
6. **Task Scheduler API** - High-performance scheduling (Go | API)

## Monitoring & Analytics

The portfolio includes Vercel Analytics configuration for tracking:
- Performance metrics (Core Web Vitals)
- Traffic analytics
- Error tracking
- API latency

Visit your [Vercel Dashboard](https://vercel.com/dashboard) to view live metrics.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── Projects.tsx          # Featured projects
│   ├── About.tsx             # About me section
│   ├── Skills.tsx            # Skills section
│   └── Contact.tsx           # Contact section
└── public/                   # Static assets
```

## Customization

### Update Your Information

Edit these files to personalize:
- `src/components/Hero.tsx` - Hero section content
- `src/components/Projects.tsx` - Project list
- `src/components/About.tsx` - About information
- `src/components/Skills.tsx` - Technical skills
- `src/components/Contact.tsx` - Contact details

### Colors & Styling

Modify `tailwind.config.ts` to change:
- Primary colors (currently purple/pink)
- Spacing and layout
- Custom animations

## Performance

- **Lighthouse Score**: 95+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Page Size**: < 200KB

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Documentation](https://vercel.com/docs)

## License

© 2026 Rishabh Singh. All rights reserved.

## Support

- Email: Singh.rishabh701@gmail.com
- GitHub: [ImRi8](https://github.com/ImRi8)
- LinkedIn: [rishabh690](https://linkedin.com/in/rishabh690)

---

**Showcasing innovation, execution, and technical excellence.**
