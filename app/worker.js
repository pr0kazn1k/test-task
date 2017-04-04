'use strict';

const CACHE_NAME = 'v1.0';

const resourceList = [
    '/',
    'index.html',
    '/dist/app.js',
    '/dist/app.css',
    '/icon/icon-96.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(resourceList);
    }));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        getFromNetwork(e.request)
            .catch(() => {
                return getFromCache(e.request);
            })
    );
});

function getFromNetwork(request, timeout) {
    timeout || (timeout = 1000);

    return new Promise((resolve, reject) => {
        var timeoutFn = setTimeout(reject, timeout);
        fetch(request).then(response => {
            clearTimeout(timeoutFn);
            addInCache(request, response.clone());
            resolve(response);
        }, reject);
    });
}

function addInCache(request, response) {
    caches.open(CACHE_NAME).then(cache => {
        return cache.put(request, response);
    });
}

function getFromCache(request) {
    return caches.open(CACHE_NAME)
        .then(cache => {
            return cache.match(request)
                .then(response => {
                    return response || Promise.reject('nothing found');
                });
        });
}
