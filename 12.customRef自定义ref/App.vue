<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  setup() {
    //自定义一个ref
    function myRef(value,delay) {
      let timer
      return customRef((track,trigger) => {
        return {
          get() {
            track() // 通知Vue追踪value的变化
            return value
          },
          set(newValue) {
            clearTimeout(timer) //防抖
            timer = setTimeout(() => {
              value = newValue
              trigger() //通知Vue去重新解析模板
            },delay)
          }
        }
      })
    }

    // let keyWord = ref('hello') // vue自己提供的ref
    let keyWord = myRef('hello',500)  // 使用程序员自定义的ref

    return {
      keyWord
    }
  }
}
</script>


