<template>
  <h1>我是App组件</h1>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <h3>职业:{{job.type}}</h3>
  <h3>工资:{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    //数据
    let name = ref('张三')
    let age = ref(20) 
    let job = ref({
      type: '前端工程师',
      salary:'20K'
    })

    function changeInfo() {
      name.value = '李四'
      age.value = 23
      job.value.type = 'UI工程师'
      job.value.salary = '23K'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>


