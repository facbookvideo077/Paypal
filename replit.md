# PayPal Login Demo

## Overview
A pixel-perfect demo recreation of PayPal's login page interface. This is a frontend-only demo that replicates PayPal's authentic UI design, including the two-step login flow, branding, and responsive layout.

## Features
- **Authentic PayPal Design**: Exact color scheme (#0070ba primary blue, #003087 dark blue), typography, and spacing
- **Two-Step Login Flow**: Email/phone entry first, then password step (matches real PayPal UX)
- **Interactive Elements**: Password visibility toggle, form validation states, loading indicators
- **Responsive Layout**: Works on mobile and desktop devices
- **PayPal Branding**: Official PayPal logo SVG, proper button styles (rounded-full), input styling

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── PayPalLogo.tsx      # PayPal SVG logo component
│   │   └── ui/                  # Shadcn UI components
│   ├── pages/
│   │   └── login.tsx           # Main login page
│   ├── App.tsx                 # App router
│   └── index.css               # PayPal design tokens and styles
└── index.html                  # HTML template with meta tags
```

## Key Components

### PayPalLogo.tsx
Reusable SVG component for the official PayPal logo with dual-tone coloring (#253B80 and #179BD7).

### login.tsx
Main login page with:
- Email/phone input step
- Password input step with show/hide toggle
- Demo toast notifications for all actions
- Footer with security message, language selector, and links

## Design Tokens (index.css)
- `--primary`: PayPal blue (#0070ba / 203 100% 37%)
- `--primary-dark`: Dark blue for hover states (#003087)
- `--background`: Light gray page background (#f5f7fa)
- `--destructive`: Error red (#d20000)

## Custom CSS Classes
- `.paypal-input`: 48px height inputs with proper borders and focus states
- `.paypal-btn-primary`: Blue rounded-full buttons
- `.paypal-btn-secondary`: White outlined rounded-full buttons
- `.paypal-link`: Blue text links with hover underline
- `.paypal-card`: White card with shadow

## Running the Project
The application runs with `npm run dev` which starts:
- Express backend server
- Vite frontend dev server
- Available at port 5000

## Demo Behavior
All login attempts, sign up, forgot password, and footer links show toast notifications indicating this is a demo. No actual authentication is performed.
