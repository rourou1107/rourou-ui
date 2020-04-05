import Toast from "../components/Toast"

export default {
    install(Vue) {
        Vue.prototype.$toast = function(message, toastOptions={}){
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData: {
                    autoCloseDelay: toastOptions.autoCloseDelay
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
