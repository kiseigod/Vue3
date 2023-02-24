<template>
  <h1>我是App组件</h1>
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <h3>职业:{{person.job.type}}</h3>
  <h3>工资:{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name:'张三',
      age:20,
      job: {
        type: '前端工程师',
        salary: '20K'
      },
      hobby: ['抽烟', '喝酒']
    })
     

    function changeInfo() {
      person.name = '李四'
      person.age = 23
      person.job.type = 'UI工程师'
      person.job.salary = '23K'
      person.hobby[0] = '学习'
    }

    return {
      person,
      changeInfo
    }
  }
}
</script>


