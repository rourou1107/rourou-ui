const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/Input'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value',()=>{
            vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('hello')
        })
        it('接收 disabled', ()=>{
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.getAttribute('disabled')).to.equal('disabled')
        })
        it('接收 readonly', ()=>{
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.getAttribute('readonly')).to.equal('readonly')
        })
        it('接收 error', ()=>{
            vm = new Constructor({
                propsData: {
                    error: '格式错误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            const href = useElement.getAttribute('xlink:href')
            expect(href).to.equal('#i-error')
            const spanElement = vm.$el.querySelector('span')
            const text = spanElement.innerText
            expect(text).to.equal('格式错误')
        })
    })
    describe('事件', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 change/input/focus/blur ',()=>{
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName)=>{
                    const callback = sinon.fake();
                    vm = new Constructor({}).$mount()
                    vm.$on(eventName, callback)
                    const inputElement = vm.$el.querySelector('input')
                    // 自动触发 input 的事件
                    let event = new Event(eventName);
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith(event)
                })
        })
    })
})
