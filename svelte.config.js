// import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-github';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

export default {
	kit: {
	  adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'docs',
		assets: 'docs',
		fallback: null,
		precompress: false,
		domain: '/pragmatic-regex-web',
		jekyll: false
	  })
	}
  };
