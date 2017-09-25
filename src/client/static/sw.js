importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.1c289a92c89e91f72bc8.js",
    "revision": "83f88f56a6ead24685455e43ed69506b"
  },
  {
    "url": "/_nuxt/common.07336c12851b8e3b0ee7f6470e5b4fe1.css",
    "revision": "4fd5133e64c53d4e953c6a5a1cd64eb9"
  },
  {
    "url": "/_nuxt/common.f19a6abc5f67a5f4dd6f.js",
    "revision": "4d51d454a22184eb5da5956a3b9d6413"
  },
  {
    "url": "/_nuxt/layouts/default.0cf7a000fead9d46cecd.js",
    "revision": "38ad3296790eae89ea325865dd490657"
  },
  {
    "url": "/_nuxt/manifest.c42fed18b0f3cb691d11.js",
    "revision": "e773b358a49ff13de0553d59facb172c"
  },
  {
    "url": "/_nuxt/pages/admin\\index.28e8fd9debbfb91423c3.js",
    "revision": "0be5b1ec74050c39b994a7ee0284f9b7"
  },
  {
    "url": "/_nuxt/pages/index.7715c7955181bea4c1d5.js",
    "revision": "e111563acadda7fd792a1a987ac16492"
  },
  {
    "url": "/_nuxt/pages/users\\_username\\index.d7ef9df94b7a152a0091.js",
    "revision": "7873eeba73d2b7393809870ef7e758ff"
  },
  {
    "url": "/_nuxt/pages/users\\auth\\index.12fb36eea4558df0ae54.js",
    "revision": "425b925f8f0473d903a19580dbdd61c0"
  },
  {
    "url": "/_nuxt/pages/users\\auth\\sign-in.646c0fd5ee0559819403.js",
    "revision": "4bc3f1b9a7b9cc8547835ef8a4234e6a"
  },
  {
    "url": "/_nuxt/pages/users\\auth\\sign-out.cbb656ea6a12d2cd76d7.js",
    "revision": "f969a0c98e910b5eebf67c7fafa8158f"
  },
  {
    "url": "/_nuxt/pages/users\\auth\\sign-up.7cbdd1b33401b9810c0d.js",
    "revision": "1e3cd42a61deae60786301f93f3c33f3"
  },
  {
    "url": "/_nuxt/pages/users\\index.de65aac6e86b612a4800.js",
    "revision": "4e9dd9d38eb3fba300187b4b953e5aae"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vuetkg_0.0.1",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
