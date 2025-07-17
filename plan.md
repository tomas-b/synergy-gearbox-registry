## Comprehensive Code Agent Prompt

```
BUILD A COMPLETE SHADCN REGISTRY FOR COBOT WITH STATIC DEPLOYMENT

You are building a production-ready Shadcn component registry that serves Cobot-branded components and themes. This registry will be deployed as a static site on Vercel and must support the standard Shadcn CLI installation workflow.

=== PROJECT REQUIREMENTS ===

FINAL GOAL: 
- Working registry at https://cobot-registry.vercel.app
- Teams can install with: npx shadcn@latest add https://cobot-registry.vercel.app/r/[component].json
- All components use Cobot branding (oklch color system)
- Includes custom ai-loading-span component from Vista project

TECHNICAL STACK:
- Static file serving (no Next.js/API routes needed)
- Shadcn CLI canary version for build command
- Vercel static deployment with CORS
- TypeScript for components
- Tailwind CSS with custom CSS variables

=== COMPLETE DIRECTORY STRUCTURE ===

```
cobot-registry/
├── package.json                    # Build scripts and dependencies
├── components.json                 # Shadcn CLI configuration
├── registry.json                   # Main registry definition
├── vercel.json                     # Vercel deployment config
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── .gitignore                      # Git ignore file
├── README.md                       # Documentation
├── registry/                       # Source component files
│   └── cobot/                      # Style namespace
│       ├── cobot-theme/
│       │   └── globals.css         # Complete theme CSS
│       ├── button/
│       │   └── button.tsx          # Button component
│       ├── card/
│       │   └── card.tsx            # Card component
│       ├── input/
│       │   └── input.tsx           # Input component
│       ├── label/
│       │   └── label.tsx           # Label component
│       └── ai-loading-span/
│           └── ai-loading-span.tsx # Custom loading component
└── public/                         # Built registry files (auto-generated)
    └── r/                          # Registry endpoint files
        ├── cobot-theme.json        # Generated theme file
        ├── button.json             # Generated button file
        ├── card.json               # Generated card file
        ├── input.json              # Generated input file
        ├── label.json              # Generated label file
        └── ai-loading-span.json    # Generated loading span file
```

=== PACKAGE.JSON CONFIGURATION ===

Create package.json with exact dependencies and scripts:

```json
{
  "name": "cobot-registry",
  "version": "1.0.0",
  "description": "Cobot component registry for Shadcn CLI",
  "main": "index.js",
  "scripts": {
    "build": "shadcn build && npm run validate",
    "dev": "shadcn build --watch",
    "validate": "node scripts/validate-registry.js",
    "preview": "npx serve public",
    "clean": "rm -rf public/r/*",
    "prebuild": "npm run clean"
  },
  "dependencies": {
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-slot": "^1.1.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.471.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "shadcn": "2.2.0-canary.1",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "keywords": ["shadcn", "ui", "components", "cobot", "registry"],
  "author": "Cobot Team",
  "license": "MIT"
}
```

=== SHADCN CLI CONFIGURATION ===

Create components.json for Shadcn CLI:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "cobot",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "registry/cobot/cobot-theme/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

=== COMPLETE REGISTRY.JSON CONFIGURATION ===

Create the main registry definition with all components:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "cobot-registry",
  "version": "1.0.0",
  "description": "Cobot branded components for Shadcn CLI",
  "homepage": "https://cobot-registry.vercel.app",
  "author": "Cobot Team",
  "items": [
    {
      "name": "cobot-theme",
      "type": "registry:theme",
      "title": "Cobot Theme",
      "description": "Cobot brand colors and design tokens using oklch color space",
      "files": [
        {
          "path": "registry/cobot/cobot-theme/globals.css",
          "type": "registry:style",
          "target": "app/globals.css"
        }
      ],
      "cssVars": {
        "light": {
          "background": "oklch(1.0000 0 0)",
          "foreground": "oklch(0.2686 0 0)",
          "primary": "oklch(0.7686 0.1647 70.0804)",
          "primary-foreground": "oklch(0 0 0)"
        },
        "dark": {
          "background": "oklch(0.2046 0 0)",
          "foreground": "oklch(0.9219 0 0)",
          "primary": "oklch(0.7686 0.1647 70.0804)",
          "primary-foreground": "oklch(0 0 0)"
        }
      }
    },
    {
      "name": "button",
      "type": "registry:ui",
      "title": "Button",
      "description": "Displays a button or a component that looks like a button with Cobot styling",
      "dependencies": [
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "tailwind-merge"
      ],
      "files": [
        {
          "path": "registry/cobot/button/button.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "card",
      "type": "registry:ui", 
      "title": "Card",
      "description": "Displays a card with header, content, and footer sections",
      "dependencies": [
        "clsx",
        "tailwind-merge"
      ],
      "files": [
        {
          "path": "registry/cobot/card/card.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "input",
      "type": "registry:ui",
      "title": "Input", 
      "description": "Displays a form input field with Cobot styling",
      "dependencies": [
        "clsx",
        "tailwind-merge"
      ],
      "files": [
        {
          "path": "registry/cobot/input/input.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "label",
      "type": "registry:ui",
      "title": "Label",
      "description": "Renders an accessible label associated with controls",
      "dependencies": [
        "@radix-ui/react-label",
        "class-variance-authority",
        "clsx",
        "tailwind-merge"
      ],
      "files": [
        {
          "path": "registry/cobot/label/label.tsx", 
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "ai-loading-span",
      "type": "registry:block",
      "title": "AI Loading Span",
      "description": "Animated loading text with shimmer effect for AI operations",
      "dependencies": [
        "clsx"
      ],
      "files": [
        {
          "path": "registry/cobot/ai-loading-span/ai-loading-span.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

=== VERCEL DEPLOYMENT CONFIGURATION ===

Create vercel.json with proper static hosting and CORS:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "installCommand": "npm install",
  "framework": null,
  "functions": {},
  "routes": [
    {
      "src": "/r/(.*)",
      "dest": "/r/$1",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/r/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods", 
          "value": "GET, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type, Authorization"
        },
        {
          "key": "Content-Type",
          "value": "application/json"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

=== COMPLETE THEME CSS FILE ===

Create registry/cobot/cobot-theme/globals.css with EXACT oklch values:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: oklch(1.0000 0 0);
    --foreground: oklch(0.2686 0 0);
    --card: oklch(1.0000 0 0);
    --card-foreground: oklch(0.2686 0 0);
    --popover: oklch(1.0000 0 0);
    --popover-foreground: oklch(0.2686 0 0);
    --primary: oklch(0.7686 0.1647 70.0804);
    --primary-foreground: oklch(0 0 0);
    --secondary: oklch(0.9670 0.0029 264.5419);
    --secondary-foreground: oklch(0.4461 0.0263 256.8018);
    --muted: oklch(0.9846 0.0017 247.8389);
    --muted-foreground: oklch(0.5510 0.0234 264.3637);
    --accent: oklch(0.9869 0.0214 95.2774);
    --accent-foreground: oklch(0.4732 0.1247 46.2007);
    --destructive: oklch(0.6368 0.2078 25.3313);
    --destructive-foreground: oklch(1.0000 0 0);
    --border: oklch(0.9276 0.0058 264.5313);
    --input: oklch(0.9276 0.0058 264.5313);
    --ring: oklch(0.7686 0.1647 70.0804);
    --chart-1: oklch(0.7686 0.1647 70.0804);
    --chart-2: oklch(0.6658 0.1574 58.3183);
    --chart-3: oklch(0.5553 0.1455 48.9975);
    --chart-4: oklch(0.4732 0.1247 46.2007);
    --chart-5: oklch(0.4137 0.1054 45.9038);
    --sidebar: oklch(0.9846 0.0017 247.8389);
    --sidebar-foreground: oklch(0.2686 0 0);
    --sidebar-primary: oklch(0.7686 0.1647 70.0804);
    --sidebar-primary-foreground: oklch(1.0000 0 0);
    --sidebar-accent: oklch(0.9869 0.0214 95.2774);
    --sidebar-accent-foreground: oklch(0.4732 0.1247 46.2007);
    --sidebar-border: oklch(0.9276 0.0058 264.5313);
    --sidebar-ring: oklch(0.7686 0.1647 70.0804);
    --font-sans: Inter, sans-serif;
    --font-serif: Source Serif 4, serif;
    --font-mono: JetBrains Mono, monospace;
    --radius: 0.375rem;
    --shadow-2xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
    --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
    --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
    --shadow: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
    --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10);
    --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10);
    --shadow-xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10);
    --shadow-2xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.25);
    --tracking-normal: 0em;
    --spacing: 0.25rem;
  }

  .dark {
    --background: oklch(0.2046 0 0);
    --foreground: oklch(0.9219 0 0);
    --card: oklch(0.2686 0 0);
    --card-foreground: oklch(0.9219 0 0);
    --popover: oklch(0.2686 0 0);
    --popover-foreground: oklch(0.9219 0 0);
    --primary: oklch(0.7686 0.1647 70.0804);
    --primary-foreground: oklch(0 0 0);
    --secondary: oklch(0.2686 0 0);
    --secondary-foreground: oklch(0.9219 0 0);
    --muted: oklch(0.2686 0 0);
    --muted-foreground: oklch(0.7155 0 0);
    --accent: oklch(0.4732 0.1247 46.2007);
    --accent-foreground: oklch(0.9243 0.1151 95.7459);
    --destructive: oklch(0.6368 0.2078 25.3313);
    --destructive-foreground: oklch(1.0000 0 0);
    --border: oklch(0.3715 0 0);
    --input: oklch(0.3715 0 0);
    --ring: oklch(0.7686 0.1647 70.0804);
    --chart-1: oklch(0.8369 0.1644 84.4286);
    --chart-2: oklch(0.6658 0.1574 58.3183);
    --chart-3: oklch(0.4732 0.1247 46.2007);
    --chart-4: oklch(0.5553 0.1455 48.9975);
    --chart-5: oklch(0.4732 0.1247 46.2007);
    --sidebar: oklch(0.1684 0 0);
    --sidebar-foreground: oklch(0.9219 0 0);
    --sidebar-primary: oklch(0.7686 0.1647 70.0804);
    --sidebar-primary-foreground: oklch(1.0000 0 0);
    --sidebar-accent: oklch(0.4732 0.1247 46.2007);
    --sidebar-accent-foreground: oklch(0.9243 0.1151 95.7459);
    --sidebar-border: oklch(0.3715 0 0);
    --sidebar-ring: oklch(0.7686 0.1647 70.0804);
    --font-sans: Inter, sans-serif;
    --font-serif: Source Serif 4, serif;
    --font-mono: JetBrains Mono, monospace;
    --radius: 0.375rem;
    --shadow-2xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
    --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
    --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
    --shadow: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
    --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10);
    --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10);
    --shadow-xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10);
    --shadow-2xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.25);
  }

  @theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);
    --color-sidebar: var(--sidebar);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-ring: var(--sidebar-ring);

    --font-sans: var(--font-sans);
    --font-mono: var(--font-mono);
    --font-serif: var(--font-serif);

    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);

    --shadow-2xs: var(--shadow-2xs);
    --shadow-xs: var(--shadow-xs);
    --shadow-sm: var(--shadow-sm);
    --shadow: var(--shadow);
    --shadow-md: var(--shadow-md);
    --shadow-lg: var(--shadow-lg);
    --shadow-xl: var(--shadow-xl);
    --shadow-2xl: var(--shadow-2xl);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

=== COMPONENT IMPLEMENTATIONS ===

Create registry/cobot/button/button.tsx:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

Create registry/cobot/card/card.tsx:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

Create registry/cobot/input/input.tsx:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

Create registry/cobot/label/label.tsx:

```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

Create registry/cobot/ai-loading-span/ai-loading-span.tsx (EXACT COPY):

```tsx
"use client"
import type React from "react"

interface AILoadingSpanProps {
  children?: React.ReactNode
  className?: string
}

export function AILoadingSpan({ children = "Loading...", className = "" }: AILoadingSpanProps) {
  return (
    <span
      className={`
        relative inline-block overflow-hidden
        bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600
        bg-clip-text text-transparent
        animate-shimmer
        ${className}
      `}
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 1s ease-in-out infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  )
}
```

=== ADDITIONAL CONFIGURATION FILES ===

Create tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './registry/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

Create tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "registry/**/*"
  ],
  "exclude": ["node_modules"]
}
```

Create .gitignore:

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Generated registry files
public/r/
dist/

# Vercel
.vercel/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

=== VALIDATION SCRIPT ===

Create scripts/validate-registry.js:

```js
const fs = require('fs');
const path = require('path');

function validateRegistry() {
  console.log('🔍 Validating registry...');
  
  // Check if registry.json exists
  if (!fs.existsSync('./registry.json')) {
    console.error('❌ registry.json not found');
    process.exit(1);
  }
  
  // Parse registry
  const registry = JSON.parse(fs.readFileSync('./registry.json', 'utf8'));
  
  // Check if public/r directory exists
  if (!fs.existsSync('./public/r')) {
    console.error('❌ public/r directory not found. Run build first.');
    process.exit(1);
  }
  
  let errors = 0;
  
  // Validate each component
  registry.items.forEach(item => {
    console.log(`📦 Checking ${item.name}...`);
    
    // Check if JSON file was generated
    const jsonPath = `./public/r/${item.name}.json`;
    if (!fs.existsSync(jsonPath)) {
      console.error(`❌ Generated file missing: ${jsonPath}`);
      errors++;
      return;
    }
    
    // Validate JSON structure
    try {
      const componentJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      
      if (!componentJson.name) {
        console.error(`❌ ${item.name}: Missing name property`);
        errors++;
      }
      
      if (!componentJson.files || !Array.isArray(componentJson.files)) {
        console.error(`❌ ${item.name}: Missing or invalid files array`);
        errors++;
      }
      
      // Check if source files exist
      item.files.forEach(file => {
        if (!fs.existsSync(file.path)) {
          console.error(`❌ ${item.name}: Source file missing: ${file.path}`);
          errors++;
        }
      });
      
    } catch (e) {
      console.error(`❌ ${item.name}: Invalid JSON: ${e.message}`);
      errors++;
    }
  });
  
  if (errors === 0) {
    console.log('✅ All components validated successfully!');
    console.log(`📊 Registry contains ${registry.items.length} components`);
  } else {
    console.error(`❌ Validation failed with ${errors} errors`);
    process.exit(1);
  }
}

validateRegistry();
```

=== BUILD AND DEPLOYMENT PROCESS ===

1. **Installation Steps**:
   ```bash
   npm install
   npm run build
   npm run validate
   ```

2. **Local Testing**:
   ```bash
   npm run preview
   # Test at http://localhost:3000/r/button.json
   ```

3. **Vercel Deployment**:
   ```bash
   npx vercel --prod
   ```

4. **CLI Testing Commands**:
   ```bash
   # Test theme installation
   npx shadcn@latest add https://cobot-registry.vercel.app/r/cobot-theme.json
   
   # Test component installation
   npx shadcn@latest add https://cobot-registry.vercel.app/r/button.json
   npx shadcn@latest add https://cobot-registry.vercel.app/r/card.json
   npx shadcn@latest add https://cobot-registry.vercel.app/r/input.json
   npx shadcn@latest add https://cobot-registry.vercel.app/r/label.json
   npx shadcn@latest add https://cobot-registry.vercel.app/r/ai-loading-span.json
   ```

=== SUCCESS CRITERIA ===

The registry is complete when:
- [ ] All 6 JSON files generate in public/r/
- [ ] CORS headers work for cross-origin requests  
- [ ] Components install via Shadcn CLI without errors
- [ ] Theme applies Cobot branding (oklch colors)
- [ ] AI loading span component works with shimmer animation
- [ ] Vercel deployment serves files with proper caching
- [ ] Registry validates without errors

=== TROUBLESHOOTING ===

Common issues and fixes:
- **Build fails**: Check shadcn@canary is installed
- **CORS errors**: Verify vercel.json headers configuration
- **Components not themed**: Ensure CSS variables are properly set
- **CLI installation fails**: Check JSON structure and file paths
- **Missing utils**: Components need @/lib/utils for cn() function

CREATE ALL FILES EXACTLY AS SPECIFIED AND DEPLOY TO VERCEL.
```
