import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
=======
>>>>>>> 7c81a88ab3607032af02d8258b77ea3238587e83
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
>>>>>>> 7c81a88 (Setup complete and first test passed)
=======
>>>>>>> 7c81a88ab3607032af02d8258b77ea3238587e83
    },
  },
  plugins: [],
}
export default config
