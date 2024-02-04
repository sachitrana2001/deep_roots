import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#4831D4",
        darkShade: "#001037",
        lemon: "#CCF381",
        'gradient': 'linear-gradient(203deg, rgba(192, 90, 255, 1) 0%, rgba(67, 39, 158, 1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
