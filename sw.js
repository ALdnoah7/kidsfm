'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["kidsfm/index.html","kidsfm/style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
