import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";
import GroupButton from "./components/GroupButton";
import Input from "./components/Input"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-group-button', GroupButton);
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false
        };
    }
});
