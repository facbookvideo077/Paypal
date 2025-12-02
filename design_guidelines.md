# PayPal Login Page Demo - Design Guidelines

## Design Approach
**Reference-Based Design**: Authentic PayPal interface replication. Study PayPal's current login page design patterns, component styling, and visual hierarchy to create a pixel-perfect demo experience.

## Color Palette
- **Primary Blue**: #0070ba (PayPal brand blue - buttons, links, accents)
- **Dark Blue**: #003087 (hover states, emphasis)
- **Text**: #2c2e2f (primary text), #6c7378 (secondary text)
- **Backgrounds**: #ffffff (card/form), #f5f7fa (page background)
- **Borders**: #cbd2d6 (input borders), #9da3a6 (dividers)
- **Error Red**: #d20000 (validation messages)

## Typography
- **Primary Font**: Use system fonts stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
- **Heading (Logo area)**: 28px, medium weight
- **Input Labels**: 13px, regular weight, #2c2e2f
- **Button Text**: 15px, medium weight
- **Body Text**: 14px, regular weight
- **Footer Links**: 12px, regular weight

## Layout Structure

### Page Layout
- Centered design with max-width container (408px for form card)
- Light gray page background (#f5f7fa)
- White card container with subtle shadow for form area
- Generous vertical spacing between sections (py-8 to py-12)

### Component Hierarchy (Top to Bottom)
1. **Header Section**: PayPal logo (provided SVG) centered, 48px height, mb-8
2. **Main Form Card**: White background, rounded corners (8px), shadow, p-8
3. **Form Title**: "Log in to your PayPal account" - 28px, mb-6
4. **Email/Phone Input**: Full-width, 48px height, border-radius 4px, mb-4
5. **Password Input**: Full-width, 48px height, border-radius 4px, mb-4
6. **Forgot Link**: Right-aligned below password, 13px, blue link
7. **Log In Button**: Full-width, 48px height, rounded 24px, primary blue background, white text, mb-4
8. **Divider**: "or" text centered with horizontal lines, mb-4
9. **Sign Up Button**: Full-width, 48px height, rounded 24px, white background, dark border, dark text
10. **Footer Section**: Security message, language selector, footer links

### Form Input Specifications
- **Height**: 48px
- **Border**: 1px solid #cbd2d6, focus state: 2px solid #0070ba
- **Padding**: px-4
- **Border Radius**: 4px
- **Font Size**: 15px
- **Placeholder Color**: #9da3a6

### Button Specifications
- **Primary (Log In)**: Background #0070ba, hover #003087, text white, height 48px, full-width, border-radius 24px
- **Secondary (Sign Up)**: Background white, border 1px solid #2c2e2f, text #2c2e2f, hover background #f5f7fa
- **No shadow on buttons**

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16** for consistent spacing
- Form card padding: p-8
- Between form elements: mb-4 or mb-6
- Section spacing: py-8 to py-12
- Page margins: mx-auto with max-width constraints

## Footer Design
- **Security Message**: Small icon + "We'll never ask for your password via email", centered, mb-6
- **Language Selector**: Dropdown or link, centered, mb-4
- **Footer Links Grid**: 2-column grid on mobile, 4-column on desktop, small text (12px), blue links
- **Copyright**: Centered, smallest text (11px), gray color

## Responsive Behavior
- **Mobile (< 768px)**: Form card full-width with px-6, reduce logo size to 40px
- **Desktop**: Centered card (408px width), maintain all spacing

## Animations
None. PayPal login uses static, fast-loading interface for security and trust.

## Images
No hero images. PayPal login is utility-focused with minimal graphics beyond the logo.

## Key Design Principles
1. **Trust & Security**: Clean, professional appearance with no distractions
2. **Simplicity**: Minimal elements, clear hierarchy, obvious actions
3. **Accessibility**: High contrast, clear focus states, proper label associations
4. **Speed**: Fast-loading, no unnecessary animations or heavy assets