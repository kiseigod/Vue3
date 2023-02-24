<template>
  <div class="son">
    <h3>我是Son组件(孙)</h3>
    <h3>{{name}}---{{price}}</h3>
  </div>
</template>

<script>
import {inject,toRefs} from 'vue'
export default {
    name: 'Son',
    setup() {

        // 接收祖组件的数据
        let car = inject('car')

        return{
            ...toRefs(car)
        }
    }
    
}
</script>

<style>
.son{
  background-color: orange;
  padding: 10px;
}
</style>


