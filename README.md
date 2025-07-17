# Synergy Component Registry

A custom Shadcn/UI component registry with beautiful themes and components. Built for modern React applications with full TypeScript support.

## 🎨 Available Themes

### Default Dark Theme
A modern dark theme with carefully selected colors using the oklch color space for better color consistency.

### Dark Green Experimental
An experimental dark theme featuring green accents, perfect for developer-focused applications.

## 🧩 Components

### UI Components
- **Button** - Versatile button component with multiple variants (default, destructive, outline, secondary, ghost, link)
- **Card** - Container component with header, content, and footer sections
- **Input** - Form input field with consistent styling
- **Label** - Accessible label component for form controls

### Special Components
- **AI Loading Span** - Animated loading text with a shimmer effect, perfect for AI-powered features

## Installation

Install components using the Shadcn CLI:

```bash
# Install themes (choose one)
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/theme-default.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/theme-dark-green-experimental.json

# Install individual components
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/button.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/card.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/input.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/label.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/ai-loading-span.json
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/tomas-b/synergy-gearbox-registry.git
cd synergy-gearbox-registry

# Install dependencies
pnpm install

# Build the registry
pnpm run build

# Preview locally
pnpm run preview
# Visit http://localhost:3000
```

### Adding New Components

1. Create a new component in `registry/synergy/[component-name]/`
2. Add the component to `registry.json`
3. Run `pnpm run build` to generate the registry files
4. Test with `npx shadcn@latest add [your-local-url]`

## 🚀 Deployment

This registry is automatically deployed to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow handles:

1. Installing dependencies with pnpm
2. Building the registry files
3. Deploying to GitHub Pages

## 📝 License

MIT License - feel free to use these components in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using [Shadcn/UI](https://ui.shadcn.com)

## ✨ Features

- 🚀 **Easy Installation** - Install any component with a single command
- 🎨 **oklch Color System** - Modern color space for consistent, accessible colors
- 📦 **Tree-shakeable** - Only import what you need
- 🔧 **Fully Customizable** - All components use CSS variables
- 💻 **TypeScript Support** - Full type safety out of the box
- 🌐 **CORS Enabled** - Use from any domain
- ⚡ **Static Hosting** - Fast CDN delivery via GitHub Pages