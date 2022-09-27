export const manifest = {
	appDir: "_app",
	assets: new Set(["BgImage1.jpg","BgImage2.jpg","BgImage3.jpg","favicon.png","Me.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-83bbcce4.js","imports":["_app/immutable/start-83bbcce4.js","_app/immutable/chunks/index-b519d647.js","_app/immutable/chunks/singletons-1e5b8e24.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
