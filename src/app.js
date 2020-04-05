import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";
import GroupButton from "./components/GroupButton";
import Input from "./components/Input"
import Row from "./components/Row";
import Col from "./components/Col";
import Layout from "./components/layout/Layout"
import Header from "./components/layout/Header"
import Content from "./components/layout/Content"
import Footer from "./components/layout/Footer"
import Sider from "./components/layout/Sider"
import plugin from "./plugin/plugin"

Vue.use(plugin)

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

new Vue({
    el: '#app',
    data() {
        return {
        }
    }
});
