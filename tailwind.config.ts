import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        label: ['Inter']
      },
      fontSize: {
        'heading-1': '50px',
        'menu-title': '32px',
        'brand-text': '16px',
        'button-text': '18px',
        'caption-text': '12px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '18px',
        'heading-5': '14px',
        'heading-6': '12px'
      },
      colors: {
        primary: {
          yellow: '#F8D254',
          white: '#FFFFFF',
          black: '#2D2E2E'
        },
        white: '#FFFFFF',
        black: '#000000',
        facebook: '#4267B2',
        'light-green': '#EFF6F3',
        'black-font': '#2D2E2E',
        yellow: {
          10: '#FDF6DC',
          30: '#FCEDBA',
          50: '#FAE498',
          70: '#F9DB76',
          100: '#F8D254'
        },
        'dark-green': {
          10: '#D7DCD7',
          30: '#B0B8AF',
          50: '#889588',
          70: '#617260',
          100: '#3A4F39'
        },
        gren: {
          10: '#ECF5EB',
          30: '#D9EBD8',
          50: '#C6E1C4',
          70: '#B3D7B1',
          100: '#A0CD9E'
        },
        gray: {
          10: '#E5E5E5',
          30: '#D5D5D5',
          50: '#C4C4C4',
          70: '#BBBBBB',
          100: '#ABABAB'
        }
      }
    }
  },
  plugins: []
}
export default config
