<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>工资:{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref,reactive,toRefs,shallowReactive,shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // let person = shallowReactive({ // shallowReactive只考虑第一层
    // shallowRef 只处理基本数据类型的响应式，不进行对象的响应式处理
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    return {
      ...toRefs(person),
    }
  }
}
</script>


