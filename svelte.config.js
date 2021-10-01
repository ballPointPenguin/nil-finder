import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter({
      // default options
      out: 'build',
      precompress: false,
      env: {
        host: 'HOST',
        port: 'PORT'
      }
    }),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
