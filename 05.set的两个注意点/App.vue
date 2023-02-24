<template>
  <Demo @hello="showHelloMsg" msg="你好" school="武大">
    <template v-slot:qwe>
      <span>你好啊！</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊,我收到了:${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>


