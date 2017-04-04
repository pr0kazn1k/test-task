'use strict';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js', { scope: '/' }).then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);

        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
            console.warn('Notifications aren\'t supported.');
            return;
        }

        if (Notification.permission === 'denied') {
            console.warn('The user has blocked notifications.');
            return;
        }

        if (!('PushManager' in window)) {
            console.warn('Push messaging isn\'t supported.');
            return;
        }
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.getSubscription()
                .then(function(subscription) {
                    if (!subscription) {
                        return;
                    }
                    sendSubscriptionToServer(subscription);
                })
                .catch(function(err) {
                    console.warn('Error during getSubscription()', err);
                });
        });
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}