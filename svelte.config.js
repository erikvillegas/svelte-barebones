import netlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
	  // default options are shown
	  adapter: netlify({
		// if true, will create a Netlify Edge Function rather
		// than using standard Node-based functions
		edge: false,
   
		// if true, will split your app into multiple functions
		// instead of creating a single one for the entire app.
		// if `edge` is true, this option cannot be used
		split: false
	  })
	}
  };

export default config;
