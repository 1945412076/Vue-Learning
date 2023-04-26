<template>
  <div id="app">
    <student name="董万凯强" sex="男" :age="18"></student>
  </div>
</template>

<script>
import Student from './components/student.vue'


export default {
  name: 'App',
  components: {
        Student,
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
