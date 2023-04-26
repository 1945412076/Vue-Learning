<template>
  <div>
    <h2>学生姓名:{{name | mySlice}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'tudent',
        data(){
            return{  
                name:'董万凯强',
                age:21,
            }
        },
        methods:{
            add(){
                this.age++
            }
        }
    }
</script>

<style>

</style>