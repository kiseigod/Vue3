<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>工资:{{job.j1.salary}}K</h2>
  <h2 v-if="person.car">车的信息:{{person.car}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="shallowPerson">输出原生person</button>
  <button @click="addCar">添加一辆车</button>
</template>

<script>
import { ref,reactive,toRefs,shallowReactive,shallowRef, shallowReadonly, toRaw, markRaw } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    //toRaw不能用在ref 作用：将响应式对象转换出普通对象
    function shallowPerson() {
      const p = toRaw(person)
      p.age++
      console.log(p);
    }

    // markRaw 将一个对象永远不会成为响应式对象
    function addCar() {
      let car = { name: '奔驰', price: '50W' }
      person.car = markRaw(car)
    }

    return {
      person,
      ...toRefs(person),
      shallowPerson,
      addCar
    }
  }
}
</script>


