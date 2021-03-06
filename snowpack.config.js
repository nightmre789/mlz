/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
   mount: {
      public: { url: "/", static: true },
      src: { url: "/dist" }
   },
   alias: {
      components: "./src/components",
      assets: "./src/assets",
      hooks: "./src/hooks"
   },
   plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-webpack"],
   routes: [
      /* Enable an SPA Fallback in development: */
      // {"match": "routes", "src": ".*", "dest": "/index.html"},
   ],
   optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
   },
   packageOptions: {
      /* ... */
   },
   devOptions: {
      /* ... */
   },
   buildOptions: {
      /* ... */
   }
};
