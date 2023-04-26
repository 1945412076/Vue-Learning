<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <button  ref="buon" @click="showDOM">点击获取DOM节点</button>
    <school ref="btn"></school>
    <student></student>
  </div>
</template>

<script>
import School from './components/school.vue'
import Student from './components/student.vue'


export default {
  name: 'App',
  components: {
    School,Student,
  },
  methods:{
      showDOM(){
        console.log(this.$refs.buon);//获取真实DOM
        console.log(this.$refs.btn);
      }
  }
}
</script>

<style>

</style>
