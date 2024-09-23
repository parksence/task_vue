import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; // 생성한 store 가져오기

// console.log(store); // 스토어가 올바르게 로드되었는지 확인

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');