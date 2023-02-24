import { createApp } from 'vue'
import App from './App.vue'
import { useIntersectionObserver } from '@vueuse/core'

// 全局指令注册
const app = createApp(App)
app.directive('lazy', {
    mounted(el,binding) {
        console.log(el, binding.value);
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }], observerElement) => {
                console.log(isIntersecting);
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
            }
        )
    }
})

app.mount('#app')

