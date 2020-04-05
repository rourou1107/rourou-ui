import Toast from "../components/Toast"

let currentToast = null
export default {
    install(Vue) {
        Vue.prototype.$toast = function(message, toastOptions={}){
            if(currentToast) {
                currentToast.close()
            }
            currentToast = createToast(message, toastOptions, Vue)
        }
    }
}

function createToast(message, toastOptions, Vue) {
    const Constructor = Vue.extend(Toast)
    currentToast = new Constructor({
        propsData: toastOptions
    })
    currentToast.$slots.default = [message]
    currentToast.$mount()
    document.body.appendChild(currentToast.$el)
    return currentToast
}
