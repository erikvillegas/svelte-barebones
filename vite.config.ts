import { Server } from '@sveltejs/kit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

server: {
  port: 8080
}

export default defineConfig({
  server: {
    port: 8080
  },
	plugins: [sveltekit()]
});
