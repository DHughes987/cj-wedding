/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blush: '#F9E5E1',
				cream: '#FFF8F0',
				gold: '#E6CBA8',
				navy: '#2D3142',
				accent: '#A7C7E7',
			},
			fontFamily: {
				heading: ['"Playfair Display"', 'serif'],
				body: ['"Inter"', 'sans-serif'],
			},
			borderRadius: {
				xl: '1.5rem',
				'2xl': '2rem',
			},
			boxShadow: {
				soft: '0 4px 24px 0 rgba(249, 229, 225, 0.15)',
				gold: '0 2px 8px 0 rgba(230, 203, 168, 0.15)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};