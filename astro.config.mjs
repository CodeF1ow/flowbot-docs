import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FlowBot Docs',
			social: {
				github: 'https://github.com/CodeF1ow/flowbot-docs',
			},
			sidebar: [
				{
					label: 'Comandos',
					items: [
						// Cada elemento aquí es una entrada en el menú de navegación.
						{ label: 'Automod', slug: 'comandos/automod' },
						{ label: 'Diversion', slug: 'comandos/diversion'},
						{ label: 'Economia', slug: 'comandos/economia'},
						{ label: 'Niveles', slug: 'comandos/niveles'},
						{ label: 'Imagenes', slug: 'comandos/imagen'},
						{ label: 'Informacion', slug: 'comandos/informacion'},
						{ label: 'Invitaciones', slug: 'comandos/invitaciones'},
						{ label: 'Moderación', slug: 'comandos/moderacion'},
						{ label: 'Musica', slug: 'comandos/musica'},
						{ label: 'Gracias', slug: 'comandos/gracias'},
						{ label: 'Tickets', slug: 'comandos/tickets'},
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
