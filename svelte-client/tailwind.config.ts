import type { Config } from "tailwindcss";
import flowbitePlugin from 'flowbite/plugin'

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#124E66',
				'secondary': '#748D92',
				'text': '#D3D9D4',
				'primarybackgroud': '#212A31',
				'secondarybackground': '#2E3944',
				'accent': '#33cccc',
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
