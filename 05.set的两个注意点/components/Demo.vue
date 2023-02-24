<template>
  <h1>一个人的信息</h1>
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <slot name="qwe"></slot><br><br>
  <button @click="test">测试自定义hello事件</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits:['hello'], 
  setup(props,context) {
    console.log(context.slots);
    let person = reactive({
      name:'张三',
      age:20,
    })
    function test() {
      context.emit('hello',5555)
    }
     
    return {
      person,
      test
    }
  }
}
</script>


