import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		https: {
			key: readFileSync(`${__dirname}/cert/key.pem`),
			cert: readFileSync(`${__dirname}/cert/cert.pem`)
		}
	}
});
