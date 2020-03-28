import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
new Vue({
    el: '#app'
});
