import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
// 解决移动端 300ms 点击延迟
import fastClick from 'fastclick';
// 重置浏览器样式
import 'normalize.css';
// 解决移动端 1px 边框问题
import './assets/border.css';


Vue.config.productionTip = false;
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body);
  }, false);
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
