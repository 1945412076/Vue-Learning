<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>人员列表</h1>
        <h3>上面组件数值{{bigger}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addname">添加</button>
        <ul>
            <li v-for="(p) in pare" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Pare',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            pare(){
                return this.$store.state.pare
            },
            // eslint-disable-next-line vue/return-in-computed-property
            bigger(){
                return this.$store.getters.bigger
            }
        },
        methods:{
            addname(){
                this.$store.commit('addname',{id:nanoid(),name:this.name}),this.name=''
            }
        }
    }
</script>

<style>

</style>