import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["BgImage1.jpg","BgImage2.jpg","BgImage3.jpg","BgImage4.jpg","favicon.png","Me.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-2ae0dff4.js","imports":["_app/immutable/start-2ae0dff4.js","_app/immutable/chunks/index-fbcad342.js","_app/immutable/chunks/singletons-608dcd46.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
