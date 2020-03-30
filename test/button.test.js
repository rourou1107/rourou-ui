const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/components/Button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

// BDD 行为驱动测试
// 举例子
// describe '人类'
//      it has a bead // 描述行为的
//      it has two eyes
//      it can run
//      it can die
describe('Button', () => {
    // it 作用是隔绝作用域
    it('存在.', () => {
        expect(Button).to.be.ok; // Button 是存在的
    });
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                name: 'setting'
            }
        }).$mount();
        const useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting');
        vm.$destroy();
    });
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                name: 'setting',
                loading: true
            }
        }).$mount();
        const useElements = vm.$el.querySelectorAll('use');
        expect(useElements.length).to.equal(1);
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading');
        vm.$destroy();
    });
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                name: 'setting',
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('1');
        vm.$el.remove();
        vm.$destroy();
    });
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                name: 'setting',
                iconPosition: 'right'
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('2');
        vm.$el.remove();
        vm.$destroy();
    });
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                name: 'setting',
            }
        }).$mount();

        const callback = sinon.fake(); // Sinon 是一个 spy / stub / mock 库，用以辅助测试
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called; // 期待 callback 被调用

    });
});
