import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
			},

			colors: {
        		body: "rgb(var(--color-bg))",
        		"box-bg": "rgb(var(--color-box))",
        		"box-shadow": "rgb(var(--box-sd))",
        		"box-border": "rgb(var(--box-border))",
        		primary: "#1d4ed8",
        		"heading-1": "rgb(var(--heading-1))",
        		"heading-2": "rgb(var(--heading-2))",
        		"heading-3": "rgb(var(--heading-3))",
			},
			screens: {
				"midmd": "880px",
			},
		},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
}