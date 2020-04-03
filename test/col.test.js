const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/Col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                span: 2
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-2')).to.eq(true)
    })
    it('接收 offset', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                offset: 2
            }
        }).$mount()
        expect(vm.$el.classList.contains('offset-2')).to.eq(true)
    })
    it('接收 ipad', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                ipad: {span: 2, offset: 2}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-ipad-2')).to.eq(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
    })
    it('接收 narrowPc', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                narrowPc: {span: 2, offset: 2}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-narrow-pc-2')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true)
    })
    it('接收 pc', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                pc: {span: 2, offset: 2}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-pc-2')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 widePc', ()=>{
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                widePc: {span: 2, offset: 2}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-wide-pc-2')).to.eq(true)
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true)
    })
})
