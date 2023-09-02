'use strict';

importScripts('kidsfm/sw-toolbox.js');

toolbox.precache(["kidsfm/index.html","kidsfm/style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/kidsfm/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
