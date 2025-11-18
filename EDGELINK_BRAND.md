# EdgeLink Brand Identity

This document describes the EdgeLink brand color palette and typography integration into the application.

## Typography

### Primary Font: Montserrat Variable
The primary font used throughout the application is **Montserrat Variable**, a modern geometric sans-serif typeface that provides excellent readability and a professional appearance.

### Secondary Font: Barlow
Used for headings (H1, H2, H3) to create visual hierarchy and impact.

### Font Usage
- **Body text, buttons, forms**: Montserrat Variable
- **Large headings (H1-H3)**: Barlow
- **Smaller headings (H4-H6)**: Montserrat Variable

## Color Palette

### Primary Brand Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--el-blue` | `#0077FF` | Main brand blue (primary.main) |
| `--el-blue-dark` | `#003B73` | Deep navy accent (primary.dark) |
| `--el-teal` | `#21C7C8` | Accent/highlight (secondary.main) |

### Neutral Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--el-gray-100` | `#F8F9FB` | Light backgrounds |
| `--el-gray-200` | `#E6E9EF` | Borders, dividers |
| `--el-gray-300` | `#C8CDD5` | Disabled states |
| `--el-gray-500` | `#6D7480` | Secondary text |
| `--el-gray-700` | `#3A3F46` | Dark text |
| `--el-gray-900` | `#1A1D21` | Primary text (text-dark) |

### Text Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--el-text-dark` | `#1A1D21` | Primary text on light backgrounds |
| `--el-text-light` | `#FFFFFF` | Primary text on dark backgrounds |

### Semantic Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--el-success` | `#21C784` | Success states, positive actions |
| `--el-warning` | `#FFB020` | Warning states, caution |
| `--el-danger` | `#FF4D4F` | Error states, destructive actions |

### Gradients

| Variable | Value | Usage |
|----------|-------|-------|
| `--el-gradient-primary` | `linear-gradient(135deg, #0077FF 0%, #003B73 100%)` | Primary gradient |
| `--el-gradient-accent` | `linear-gradient(135deg, #21C7C8 0%, #0077FF 100%)` | Accent gradient |

### Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--el-shadow-soft` | `0 4px 12px rgba(0, 0, 0, 0.08)` | Subtle elevation |
| `--el-shadow-medium` | `0 4px 18px rgba(0, 0, 0, 0.14)` | Card elevation |

## MUI Theme Mapping

The EdgeLink colors are mapped to Material-UI theme palette as follows:

### Primary
- Main: `#0077FF` (EdgeLink Blue)
- Dark: `#003B73` (EdgeLink Navy)
- Light: `#3399FF`
- Lighter: `#80BBFF`
- Darker: `#002147`

### Secondary
- Main: `#21C7C8` (EdgeLink Teal)
- Dark: `#1A9FA0`
- Light: `#58D5D6`
- Lighter: `#90E3E4`
- Darker: `#136F70`

### Info
- Main: `#0077FF` (Same as Primary)

### Success
- Main: `#21C784` (EdgeLink Success)

### Warning
- Main: `#FFB020` (EdgeLink Warning)

### Error
- Main: `#FF4D4F` (EdgeLink Danger)

### Grey Scale
- 100: `#F8F9FB`
- 200: `#E6E9EF`
- 300: `#C8CDD5`
- 500: `#6D7480`
- 700: `#3A3F46`
- 900: `#1A1D21`

## Usage

### CSS Variables
You can use the CSS variables directly in your styles:

```css
.my-element {
  color: var(--el-blue);
  background: var(--el-gradient-primary);
  box-shadow: var(--el-shadow-soft);
}
```

### MUI Theme
Access colors through the theme:

```jsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box sx={{
      color: 'primary.main',           // EdgeLink Blue
      bgcolor: 'secondary.main',       // EdgeLink Teal
      borderColor: 'grey.300'          // EdgeLink Gray-300
    }}>
      Content
    </Box>
  );
}
```

### varAlpha Helper
For transparent colors, use `varAlpha`:

```jsx
import { varAlpha } from 'minimal-shared/utils';

sx={(theme) => ({
  bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08)
})}
```

## Files Modified

- `src/theme/theme-config.js` - Main palette configuration and typography
- `src/theme/core/palette.js` - Text and background colors
- `src/global.css` - CSS custom properties and font imports
- `package.json` - Added @fontsource-variable/montserrat dependency

## Browser Compatibility

The CSS custom properties (CSS variables) are supported in all modern browsers:
- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
