const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/Row'
import Col from '../src/components/Col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接收 gutter',(done)=>{
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        let vm = new Vue({
            el: div
        })
        // vue 的 mounted 是异步的，所以他会在当前代码全部执行完，再执行 mounted
        // 而 Col 组件的 gutter 改变是在 Row mounted 时，因为 mounted 异步的原因，Col 组件的 gutter 还未改变
        // 所以此时 Col 的 padding 为 0
        // 但是 Row 的 margin 是 10px 的，因为 Row 的 margin 是在 computed 中计算的
        // 测试框架都是同步的，即同步代码执行完就立马退出。所以想要异步代码执行完毕，就要调用 done()
        setTimeout(()=>{
            expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginLeft).to.eq('-10px')
            expect(window.getComputedStyle(vm.$el.querySelector('.row')).marginRight).to.eq('-10px')
            expect(window.getComputedStyle(vm.$el.querySelector('.col')).paddingRight).to.eq('10px')
            expect(window.getComputedStyle(vm.$el.querySelector('.col')).paddingLeft).to.eq('10px')
            div.remove()
            vm.$destroy()
            done()
        })
    })
    it('接收 align', ()=>{
        let div = document.createElement('div')
        document.body.appendChild(div)
        let Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        expect(window.getComputedStyle(vm.$el).justifyContent).to.eq('center')
        div.remove()
        vm.$destroy()
    })
})
