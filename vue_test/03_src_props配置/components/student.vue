<template>
  <div>
    <h2>学生姓名:{{name}}</h2>
    <h2>性别:{{sex}}</h2>
    <h2>学生年龄:{{Myage}}</h2>
  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'tudent',
        data() {
            return {
                Myage:this.age
            }
        },
        methods:{
            add(){
                this.Myage++
            }
        },
        //接受的同时对数据：进行类型限制+默认值的指定的限制
        props:{
            name:{
                type:String,//name的类型是字符串
                require:true //name是必须的
            },
            sex:{
                type:String,
                require:true
            },
            age:{
                type:Number,
                default:99//默认值
            }
        }
    }
</script>

<style>

</style>