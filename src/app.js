import Vue from 'vue';
import Button from './components/Button';

// Vue.component('g-button', Button);
new Vue({
    el: '#app',
    components: {
        'g-button': Button
    }
});
