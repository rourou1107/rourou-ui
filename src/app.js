import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";
import GroupButton from "./components/GroupButton";
import chai from 'chai';
import spies from 'chai-spies';
import Input from "./components/Input"

chai.use(spies);

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
    },
    methods: {
        // handleChange() {
        //     console.log('change')
        // },
        // handleInput() {
        //     console.log('input')
        // },
        // handleFocus() {
        //     console.log('focus')
        // },
        // handleBlur() {
        //     console.log('blur')
        // }
    }
});
