import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";
import GroupButton from "./components/GroupButton";
import Input from "./components/Input"
import Row from "./components/Row";
import Col from "./components/Col";
import Layout from "./components/Layout"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Sider from "./components/Sider"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-group-button', GroupButton);
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message1: 'message1',
            message2: 'message2',
            message3: 'message3',
            message4: 'message4'
        };
    }
});
