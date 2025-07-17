# Synergy Component Registry

A custom Shadcn/UI registry with themes and components.

## Installation

```bash
# Install a theme (choose one)
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/theme-default.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/theme-dark-green-experimental.json

# Install components
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/button.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/card.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/input.json
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/label.json

# Custom component
npx shadcn@latest add https://tomas-b.github.io/synergy-gearbox-registry/r/ai-loading-span.json
```

## Development

```bash
# Install and build
pnpm install
pnpm run build

# Preview locally
pnpm run preview
```

### Adding New Components

1. Create component in `registry/synergy/[component-name]/`
2. Add to `registry.json`
3. Run `pnpm run build`
4. Test with `npx shadcn@latest add [local-url]`

## Deployment

Automatically deployed to GitHub Pages on push to main.