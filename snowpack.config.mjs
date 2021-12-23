/** @type {import("snowpack").SnowpackUserConfig } */

const IS_TESTING = process.env.NODE_ENV === "test";

const mount = {
  public: { url: "/", static: true },
  src: { url: "/" },
};

if (IS_TESTING) {
  mount["test-setup"] = { url: "/test-setup" };
}

export default {
  mount,
  plugins: [
    "@prefresh/snowpack",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-typescript",
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: "yarn pnpify tsc" } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    // bundle: true,
    minify: true,
    // target: "es2018",
  },
  packageOptions: {
    polyfillNode: IS_TESTING,
  },
  devOptions: {
    port: 5000,
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  knownEntrypoints: ["preact/hooks"],
};
