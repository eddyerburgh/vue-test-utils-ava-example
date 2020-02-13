// ./test/_setup.js

// https://github.com/vuejs/vue-test-utils/issues/936
// from @vue/cli-plugin-unit-mocha/setup.js
require('jsdom-global')()

// https://github.com/vuejs/vue-test-utils/issues/936
// better fix for "TypeError: Super expression must either be null or
// a function" than pinning an old version of prettier.
window.Date = Date

// Setup browser environment
require('browser-env')();
const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).exclude(({filename}) => filename.match(/\/node_modules\//)).plugin('babel').push();
