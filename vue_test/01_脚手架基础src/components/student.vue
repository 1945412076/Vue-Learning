<template>
  <div>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <button @click='add()'>点我age加一</button>
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