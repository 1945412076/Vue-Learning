<template>
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{add}}</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'school',
    data() {
      return {
        name:'武汉大学',
        add:'武汉光谷'
      }
    },
  }
</script>

<style>

</style>