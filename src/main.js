import Vue from 'vue'
import ViewUI from 'view-design'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "view-design/dist/styles/iview.css"
Vue.use(ViewUI)

import Bus from './eventBus'
Vue.prototype.$bus = Bus;

import {
	Pagination 
} from 'vant';

Vue.use(Pagination);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
