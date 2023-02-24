<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <h3>{{name}}---{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from './components/Child'
import { provide } from '@vue/runtime-core'
export default {
  name: 'App',
  components: { Child },
  setup() {
    let car = reactive({
      name: '奔驰',
      price:'50W'
    })
    
    // 给自己的后代组件传递数据
    provide('car',car)

    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>


