<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点击加一</button>
  <hr>
  <h2>当前信息:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
</template>

<script>
import { reactive, ref,watch } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age:20
    })

    // 情况一：监视ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    },{immediate:true}) */

    // 情况二：监视ref所定义的多个响应式数据
    /* watch([sum, msg], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, { immediate: true, deep: true }) */

    // 情况三：监视reactive所定义的一个响应式数据
    // watch(person, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // })

    // 情况四：监视reactive所定义的一个响应式数据中的某一个属性
    // watch(()=>person.name, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // })

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([()=>person.name,()=>person.age], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    })
    return {
      sum,
      msg,
      person
    }
  }
}
</script>


