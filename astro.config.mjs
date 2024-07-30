import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FlowBot Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Comandos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Admin', slug: 'comandos/admin' },
						{ label: 'Anime', slug: 'comandos/anime'},
						{ label: 'Diversion', slug: 'comandos/diversion'},
						{ label: 'Economia', slug: 'comandos/economia'},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
