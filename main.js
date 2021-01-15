import Vue from 'vue';
import App from './App';
import uView from 'uview-ui';
import mock from '@/utils/mock/mock.js'

Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.prototype.$mock = mock

const app = new Vue({
    ...App
});
app.$mount();
