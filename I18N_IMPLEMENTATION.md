# Multi-Language (i18n) Implementation Guide

## Overview
This project now supports **3 languages**: English (EN), Chinese (ZH), and Korean (KO) using `react-i18next`.

## Structure

```
src/
├── i18n/
│   ├── config.ts              # i18next configuration
│   └── locales/
│       ├── en/                # English translations
│       │   ├── common.json    # Header, Footer, shared
│       │   ├── hero.json      # Hero section
│       │   ├── buy.json       # Buy/Swap section
│       │   ├── faq.json       # FAQ section
│       │   └── layers.json    # Other layer components
│       ├── zh/                # Chinese translations (same structure)
│       └── ko/                # Korean translations (same structure)
└── components/
    └── common/
        └── LanguageSwitcher.tsx  # Language selector dropdown
```

## Features

✅ **3 Languages**: English, Chinese (中文), Korean (한국어)
✅ **Language Switcher**: Dropdown in header with flags
✅ **Persistent Selection**: Language saved to localStorage
✅ **Lorem Ipsum Placeholder**: Easy to replace with real translations
✅ **Preserved Terms**: "ODC", "CAT", "$ODC", "$CAT" kept intact
✅ **Type-Safe**: Full TypeScript support

## Usage

### Switching Languages
Click the language selector in the header (shows flag + language name)

### In Components

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('namespace'); // e.g., 'common', 'hero', 'faq'

  return <h1>{t('title')}</h1>;
}
```

### Translation Namespaces

- `common` - Header, Footer, shared UI
- `hero` - Hero section
- `buy` - Buy/Swap interface
- `faq` - FAQ section
- `layers` - Other layer components

## Updated Components

### ✅ Fully Implemented
- **Header.tsx** - Nav links, banner, connect button
- **Footer.tsx** - Links, social, disclaimer
- **Hero.tsx** - Title, features, buttons
- **Faq.tsx** - All FAQ categories and questions
- **LanguageSwitcher.tsx** - Language selector (NEW)

### 📝 Template Ready (Not Yet Updated)
The following components have translation files ready but need component updates:
- Buy.tsx
- Testimony.tsx
- AccessAI.tsx
- ProblemSolution.tsx
- HowItWorks.tsx
- Advantages.tsx
- Benefits.tsx
- Whitepapers.tsx
- Tokenomics.tsx
- Phase.tsx
- Ecosystem.tsx
- Growth.tsx

## Adding Real Translations

### Step 1: Replace Lorem Ipsum
Edit the JSON files in `src/i18n/locales/{lang}/` and replace Lorem Ipsum with actual translations.

Example - `src/i18n/locales/en/hero.json`:
```json
{
  "title": {
    "line1": "Freedom Through",
    "line2": "Innovation",
    "line3": "Sun God Lab"
  },
  "description": "Empowering communities through disciplined systems...",
  ...
}
```

### Step 2: Update Other Languages
Translate the same structure to Chinese and Korean:

`src/i18n/locales/zh/hero.json`:
```json
{
  "title": {
    "line1": "通过创新实现自由",
    "line2": "创新",
    "line3": "Sun God Lab"
  },
  ...
}
```

### Step 3: Keep ODC and CAT
Always preserve "ODC", "CAT", "$ODC", "$CAT" across all languages.

## Updating Remaining Components

To add translations to any component:

1. **Import the hook**:
```tsx
import { useTranslation } from 'react-i18next';
```

2. **Use the hook**:
```tsx
const { t } = useTranslation('namespace');
```

3. **Replace hardcoded text**:
```tsx
// Before
<h1>My Title</h1>

// After
<h1>{t('myTitle')}</h1>
```

4. **Add to translation files**:
```json
{
  "myTitle": "Lorem Ipsum Dolor"
}
```

## Configuration

Language detection and persistence is handled in `src/i18n/config.ts`:

```typescript
const savedLanguage = localStorage.getItem('language') || 'en';

i18n.init({
  lng: savedLanguage,
  fallbackLng: 'en',
  ...
});
```

## Tips

- **Namespaces**: Keep related translations together
- **Nested Keys**: Use dot notation `t('section.title')`
- **Interpolation**: Use `{{variable}}` for dynamic values
- **Arrays**: Use `{ returnObjects: true }` for arrays/objects
- **Keep it DRY**: Reuse common translations across components

## Testing

1. **Switch Language**: Use the dropdown in header
2. **Check localStorage**: Should persist selection
3. **Verify Text**: All text should change (except ODC/CAT)
4. **TypeScript**: Run `npm run build` to check types

## Next Steps

1. Replace Lorem Ipsum with real translations
2. Update remaining layer components
3. Add more languages if needed
4. Consider professional translation service
5. Test with native speakers

## Support

- **i18next docs**: https://www.i18next.com/
- **react-i18next docs**: https://react.i18next.com/

---

**Note**: All "ODC" and "CAT" references are intentionally preserved across all languages as per requirements.