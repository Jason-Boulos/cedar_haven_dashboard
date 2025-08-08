import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    /* Enhanced Light Mode Colors */
    
    /* Neutral Greys - Better contrast and readability */
    --color-grey-0: #ffffff;
    --color-grey-25: #fcfcfd;
    --color-grey-50: #f8fafc;
    --color-grey-100: #f1f5f9;
    --color-grey-200: #e2e8f0;
    --color-grey-300: #cbd5e1;
    --color-grey-400: #94a3b8;
    --color-grey-500: #64748b;
    --color-grey-600: #475569;
    --color-grey-700: #334155;
    --color-grey-800: #1e293b;
    --color-grey-900: #0f172a;
    
    /* Primary Brand Colors - Trust & Reliability for Booking */
    --color-primary-25: #f8faff;
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-200: #bfdbfe;
    --color-primary-300: #93c5fd;
    --color-primary-400: #60a5fa;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-primary-800: #1e40af;
    --color-primary-900: #1e3a8a;
    
    /* Success Colors - Confirmations & Completed Bookings */
    --color-success-25: #f7fef8;
    --color-success-50: #ecfdf5;
    --color-success-100: #d1fae5;
    --color-success-200: #a7f3d0;
    --color-success-300: #6ee7b7;
    --color-success-400: #34d399;
    --color-success-500: #10b981;
    --color-success-600: #059669;
    --color-success-700: #047857;
    --color-success-800: #065f46;
    --color-success-900: #064e3b;
    
    /* Warning Colors - Pending & Attention Required */
    --color-warning-25: #fffef7;
    --color-warning-50: #fffbeb;
    --color-warning-100: #fef3c7;
    --color-warning-200: #fde68a;
    --color-warning-300: #fcd34d;
    --color-warning-400: #fbbf24;
    --color-warning-500: #f59e0b;
    --color-warning-600: #d97706;
    --color-warning-700: #b45309;
    --color-warning-800: #92400e;
    --color-warning-900: #78350f;
    
    /* Error Colors - Cancellations & Errors */
    --color-error-25: #fffbfa;
    --color-error-50: #fef2f2;
    --color-error-100: #fee2e2;
    --color-error-200: #fecaca;
    --color-error-300: #fca5a5;
    --color-error-400: #f87171;
    --color-error-500: #ef4444;
    --color-error-600: #dc2626;
    --color-error-700: #b91c1c;
    --color-error-800: #991b1b;
    --color-error-900: #7f1d1d;
    
    /* Additional Accent Colors for Categories/Features */
    --color-purple-50: #faf5ff;
    --color-purple-100: #f3e8ff;
    --color-purple-500: #a855f7;
    --color-purple-600: #9333ea;
    --color-purple-700: #7c3aed;
    
    --color-teal-50: #f0fdfa;
    --color-teal-100: #ccfbf1;
    --color-teal-500: #14b8a6;
    --color-teal-600: #0d9488;
    --color-teal-700: #0f766e;
    
    --color-orange-50: #fff7ed;
    --color-orange-100: #ffedd5;
    --color-orange-500: #f97316;
    --color-orange-600: #ea580c;
    --color-orange-700: #c2410c;
    
    /* UI Elements */
    --backdrop-color: rgba(15, 23, 42, 0.4);
    --border-color: var(--color-grey-200);
    --border-color-light: var(--color-grey-100);
    
    /* Shadows - More refined */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    
    /* Background variations for dark mode */
    --bg-base: var(--color-grey-0);
    --bg-subtle: var(--color-grey-25);
    --bg-muted: var(--color-grey-50);
    --bg-glass: var(--glass-bg);
    --bg-glass-light: var(--glass-bg-light);
    
    /* Text colors */
    --text-primary: var(--color-grey-900);
    --text-secondary: var(--color-grey-700);
    --text-tertiary: var(--color-grey-500);
    --text-quaternary: var(--color-grey-400);
    
    --image-grayscale: 0;
    --image-opacity: 100%;
  }
  
  &.dark-mode {
    /* Dark Mode Colors - Optimized for visibility and charts */
    
    /* Neutral Greys - Proper contrast for dark mode */
    --color-grey-0: #18212f;
    --color-grey-25: #1f2937;
    --color-grey-50: #111827;
    --color-grey-100: #374151;
    --color-grey-200: #4b5563;
    --color-grey-300: #6b7280;
    --color-grey-400: #9ca3af;
    --color-grey-500: #d1d5db;
    --color-grey-600: #e5e7eb;
    --color-grey-700: #f3f4f6;
    --color-grey-800: #f9fafb;
    --color-grey-900: #ffffff;
    
    /* Primary Brand Colors - Visible in dark mode */
    --color-primary-25: #1e293b;
    --color-primary-50: #e0e7ff;
    --color-primary-100: #c7d2fe;
    --color-primary-200: #a5b4fc;
    --color-primary-300: #818cf8;
    --color-primary-400: #6366f1;
    --color-primary-500: #4f46e5;
    --color-primary-600: #4338ca;
    --color-primary-700: #3730a3;
    --color-primary-800: #312e81;
    --color-primary-900: #1e1b4b;
    
    /* Success Colors - Green spectrum for dark mode */
    --color-success-25: #1e293b;
    --color-success-50: #dcfce7;
    --color-success-100: #bbf7d0;
    --color-success-200: #86efac;
    --color-success-300: #4ade80;
    --color-success-400: #22c55e;
    --color-success-500: #16a34a;
    --color-success-600: #15803d;
    --color-success-700: #166534;
    --color-success-800: #14532d;
    --color-success-900: #052e16;
    
    /* Warning Colors - Yellow/Orange spectrum */
    --color-warning-25: #1e293b;
    --color-warning-50: #fef9c3;
    --color-warning-100: #fef08a;
    --color-warning-200: #fde047;
    --color-warning-300: #facc15;
    --color-warning-400: #eab308;
    --color-warning-500: #ca8a04;
    --color-warning-600: #a16207;
    --color-warning-700: #854d0e;
    --color-warning-800: #713f12;
    --color-warning-900: #422006;
    
    /* Error Colors - Red spectrum */
    --color-error-25: #1e293b;
    --color-error-50: #fee2e2;
    --color-error-100: #fecaca;
    --color-error-200: #fca5a5;
    --color-error-300: #f87171;
    --color-error-400: #ef4444;
    --color-error-500: #dc2626;
    --color-error-600: #b91c1c;
    --color-error-700: #991b1b;
    --color-error-800: #7f1d1d;
    --color-error-900: #450a0a;
    
    /* Additional Accent Colors - High contrast for dark mode */
    --color-purple-50: #f3e8ff;
    --color-purple-100: #e9d5ff;
    --color-purple-500: #a855f7;
    --color-purple-600: #9333ea;
    --color-purple-700: #7c3aed;
    
    --color-teal-50: #f0fdfa;
    --color-teal-100: #ccfbf1;
    --color-teal-500: #14b8a6;
    --color-teal-600: #0d9488;
    --color-teal-700: #0f766e;
    
    --color-orange-50: #fff7ed;
    --color-orange-100: #ffedd5;
    --color-orange-500: #f97316;
    --color-orange-600: #ea580c;
    --color-orange-700: #c2410c;
     --color-blue-100: #dbeafe;
  --color-blue-700: #1d4ed8;
  
  /* Green colors for checked-in */
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  
  /* Silver/Gray colors for checked-out */
  --color-silver-100: #f1f5f9;
  --color-silver-700: #334155;
    
    /* UI Elements - Optimized for glassmorphism and charts */
    --backdrop-color: rgba(0, 0, 0, 0.8);
    --border-color: var(--color-grey-200);
    --border-color-light: var(--color-grey-100);
    
    /* Glassmorphism backgrounds for dark mode */
    --glass-bg: rgba(31, 41, 55, 0.8);
    --glass-bg-light: rgba(55, 65, 81, 0.6);
    --glass-border: rgba(107, 114, 128, 0.2);
    
    /* Enhanced shadows for dark mode */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6);
    
    /* Background variations */
    --bg-base: var(--color-grey-0);
    --bg-subtle: var(--color-grey-25);
    --bg-muted: var(--color-grey-50);
    
    /* Text colors */
    --text-primary: var(--color-grey-900);
    --text-secondary: var(--color-grey-700);
    --text-tertiary: var(--color-grey-500);
    --text-quaternary: var(--color-grey-400);
    
    --image-grayscale: 5%;
    --image-opacity: 95%;
  }
  
  /* Legacy brand colors for backward compatibility */
  --color-brand-50: var(--color-primary-50);
  --color-brand-100: var(--color-primary-100);
  --color-brand-200: var(--color-primary-200);
  --color-brand-500: var(--color-primary-500);
  --color-brand-600: var(--color-primary-600);
  --color-brand-700: var(--color-primary-700);
  --color-brand-800: var(--color-primary-800);
  --color-brand-900: var(--color-primary-900);
  
  /* Border radius */
  --border-radius-tiny: 2px;
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  --border-radius-xl: 12px;
  --border-radius-2xl: 16px;
  --border-radius-3xl: 24px;
}

/* Enhanced base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: var(--bg-base);
  color: var(--text-primary);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  min-height: 100vh;
  line-height: 1.6;
  font-size: 1.6rem;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

*:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-100);
  color: var(--color-grey-400);
  border-color: var(--color-grey-200);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -1px;
  border-color: var(--color-primary-500);
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: var(--color-primary-600);
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 600;
  letter-spacing: -0.025em;
}



img {
  max-width: 100%;
  height: auto;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  transition: filter 0.2s ease-in-out;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-grey-100);
}

::-webkit-scrollbar-thumb {
  background: var(--color-grey-400);
  border-radius: var(--border-radius-lg);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-grey-500);
}
`;

export default GlobalStyles;
