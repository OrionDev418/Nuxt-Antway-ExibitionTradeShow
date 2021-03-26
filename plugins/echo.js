import Vue from 'vue';
import Echo from 'laravel-echo';

const echo = {};

echo.install = function (Vue) {
  Vue.prototype.$pusher = require('pusher-js');
  Vue.prototype.$echo = new Echo({
    authEndpoint:  false,    
    broadcaster: 'pusher',
    cluster: process.env.PUSHER_APP_CLUSTER,
    key: process.env.PUSHER_APP_KEY,
    wsHost: process.env.WS_HOST,
    wsPort: process.env.WS_PORT,
    forceTLS: false,
    disableStats: true,
  });
};

Vue.use(echo);