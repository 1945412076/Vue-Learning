<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <school></school>
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
  }
}
</script>

<style>

</style>
