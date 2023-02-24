import { createApp,createRenderer } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 自定义渲染器
const nodeOps = {
    createElement(tag,isSVG,is) {
        // 处理元素创建逻辑
        return {tag}
    },
    insert() {
        // 处理元素插入逻辑
    }
}
createRenderer()


