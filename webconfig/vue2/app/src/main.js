import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
 
//Vue.use(Vuetify);

new Vue({
    vuetify: Vuetify,
    render: h => h(App)
}).$mount('#app');
 
