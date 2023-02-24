<template>
  <h1>我是App组件</h1>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <button @click="sayHello">弹窗</button>
</template>

<script>
export default {
  name: 'App',
  setup() {
    //数据
    let name = '张三'
    let age = 20 

    //方法
    function sayHello() {
      alert(`我是${name},今年${age},你好啊！`)
    }
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>


