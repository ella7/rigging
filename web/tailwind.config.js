/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',
        'text_primary': '#111111',
        'accent': '#E02828', // Vivid Red
        'neutral_lightest': '#F5F5F5', // Very light gray
        'neutral_lighter': '#E6E6E6',  // Light gray
        'neutral_light': '#CCCCCC',   // Medium-light gray
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
      },
      spacing: { // Based on 8px base unit
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        // Tailwind's default spacing scale is quite good and often uses rem units for scalability.
        // The above provides pixel-perfect control as per spec. Consider if rem units are preferred for some.
        // For example, Tailwind's default p-1 is 0.25rem (4px if root font-size is 16px).
        // We'll map these directly for now.
        'gutter': '24px',
        'outer_sm': '24px',
      },
      maxWidth: {
        'content': '1200px',
      },
      height: {
        'navbar': '80px',
      },
      outlineWidth: {
        'focus': '2px',
      },
      outlineColor: theme => ({
        ...theme('colors'),
        'DEFAULT': theme('colors.accent'), // Default focus color
      }),
      translate: { // For hover lifts
        'lift': '-4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
