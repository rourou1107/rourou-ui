import Vue from 'vue';
import Button from './components/Button';
import Icon from "./components/Icon";
import GroupButton from "./components/GroupButton";
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-group-button', GroupButton);
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


let {expect} = chai;
// 单元测试
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            name: 'setting'
        }
    });
    vm.$mount(); // 不需要挂载在页面上
    let use = vm.$el.querySelector('use');
    let href = use.getAttribute('xlink:href');
    expect(href).to.eq('#i-setting');
    // 打扫战场，避免内存浪费
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            name: 'setting'
        }
    });
    let div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div); // 这里必须要挂载在页面上，否则不渲染元素，那么这个元素就没有 css 属性
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();

}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            name: 'setting',
            iconPosition: 'right'
        }
    });
    let div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    div.remove();
    vm.$el.remove();
    vm.$destroy();
}


{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            name: 'setting',
            loading: true
        }
    });

    vm.$mount();
    let use = vm.$el.querySelector('use');
    let href = use.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            name: 'setting',
        }
    });

    vm.$mount();
    // spy 是一个间谍函数
    let spy = chai.spy(function () {
    });
    // 只要click触发了，这个 spy 就会被执行
    vm.$on('click', spy);
    vm.$el.click();
    vm.$el.remove();
    vm.$destroy();
}
