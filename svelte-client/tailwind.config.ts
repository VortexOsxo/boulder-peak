import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin'

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#124E66',
				'secondary': '#748D92',
				'title-text': '#e6e8e6',
				'main-text': '#D3D9D4',
				'primary-backgroud': '#212A31',
				'secondary-background': '#2E3944',
				'accent': '#33cccc',
			},
			fontFamily: {
				helvetica: ['Helvetica', 'Arial', 'sans-serif'],
			},
		}
	},

	plugins: [flowbitePlugin]
} as Config;
