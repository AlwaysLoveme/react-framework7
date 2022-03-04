import {resolve} from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const SRC_DIR = resolve(__dirname, './src');
const PUBLIC_DIR = resolve(__dirname, './public');
const BUILD_DIR = resolve(__dirname, './www',);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	root: SRC_DIR,
	base: '',
	publicDir: PUBLIC_DIR,
	build: {
		outDir: BUILD_DIR,
		assetsInlineLimit: 0,
		emptyOutDir: true,
		rollupOptions: {
			treeshake: true,
		},
	},
	resolve: {
		alias: {
			'@': SRC_DIR,
		},
	},
	server: {
		host: true,
		open: true
	},
});
