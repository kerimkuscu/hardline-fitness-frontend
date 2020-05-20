import Vue from 'vue'
import App from './App.vue'
import toastr from 'toastr';
import _ from 'lodash';
import axios from 'axios';
import $ from 'jquery';

Vue.config.productionTip = false

// Vue i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

// eslint-disable-next-line no-undef
const tr = require('./lang/tr');
// eslint-disable-next-line no-undef
const en = require('./lang/en');

const translationMessages = {
  en,
  tr,
};

let userLang = navigator.language || navigator.userLanguage;

if (userLang !== 'en' && userLang !== 'tr') userLang = null;

let locale = 'en';

const i18n = new VueI18n({
  locale,
  messages: translationMessages,
});

// Vue router
import router from './components/router';

// toastr
window.toastr = toastr;

// jQuery
window.$ = window.jQuery = $;

//lodash
window._ = _;

//axios
window.axios = axios;
window.eventHub = new Vue();

toastr.options = {
  'closeButton': true,
  'debug': false,
  'newestOnTop': true,
  'progressBar': true,
  'positionClass': 'toast-top-right',
  'onclick': null,
  'showDuration': '300',
  'hideDuration': '1000',
  'timeOut': '5000',
  'extendedTimeOut': '1000',
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
};

// eslint-disable-next-line vue/require-name-property
new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
