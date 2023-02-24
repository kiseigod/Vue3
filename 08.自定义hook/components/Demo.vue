<template>
  <h2>当前点击时鼠标的位置:x{{point.x}},y{{point.y}}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let point = usePoint()

    return {
      point
    }
  }
}
</script>


