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
						{ label: 'Estadisticas', slug: 'comandos/estadisticas'},
						{ label: 'Imagenes', slug: 'comandos/imagen'},
						{ label: 'Informacion', slug: 'comandos/informacion'},
						{ label: 'Invitaciones', slug: 'comandos/invitaciones'},
						{ label: 'Moderación', slug: 'comandos/moderacion'},
						{ label: 'Musica', slug: 'comandos/musica'},
						{ label: 'Social', slug: 'comandos/social'},
						{ label: 'Sorteos', slug: 'comandos/sorteos'},
						{ label: 'Utilidad', slug: 'comandos/utilidad'},
					],
				},
				{
					label: 'Adicional',
					autogenerate: { directory: 'adicional' },
				},
			],
		}),
	],
});
