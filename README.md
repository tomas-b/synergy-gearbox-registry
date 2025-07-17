# Synergy Component Registry

A custom Shadcn component registry for Synergy-branded components with oklch color system support.

## Themes

- **theme-default** - Default dark theme with Synergy brand colors
- **theme-dark-green-experimental** - Experimental dark theme with green accents

## Components

- **button** - Button component with Synergy styling
- **card** - Card component with header, content, and footer sections
- **input** - Form input field with Synergy styling
- **label** - Accessible label component
- **ai-loading-span** - Animated loading text with shimmer effect for AI operations

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

## Development

### Build the registry

```bash
npm install
npm run build
```

### Test locally

```bash
npm run preview
# Visit http://localhost:3000/r/button.json
```

### Deploy to Vercel

```bash
npx vercel --prod
```

## Features

- Static file serving with CORS headers
- Synergy branding with oklch color system
- Custom AI loading animation component
- Compatible with Shadcn CLI installation workflow