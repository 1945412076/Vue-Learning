<template>
  <div>
    <h3>数据总和{{sum}}</h3>
    <h4>数据的十倍:{{bigger}}</h4>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click='add(n)'>+</button>
    <button @click='unadd(n)'>-</button>
    <button @click='oddNumber(n)'>奇数相加</button>
    <button @click='waitadd(n)'>等一等再加</button>

  </div>
</template>

<script>
import { mapState,mapActions, mapGetters } from 'vuex'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Count',
        data(){
            return{  
                n:1,
            }
        },
        methods:{
            ...mapActions({add:'jia',oddNumber:'oddadd',waitadd:'waritadd'}),
            // add(){
            //     this.$store.dispatch('jia',this.n)
            // },
            unadd(){
                this.$store.commit('JIAN',this.n)
            },
            // ...mapMutations
            // oddNumber(){
            //     this.$store.dispatch('oddadd',this.n)
            // },
            // waitadd(){
            //     this.$store.dispatch('waritadd',this.n)
            // }
        },
        computed:{
            ...mapState(['sum']),
            ...mapGetters(['bigger'])
        }
    }
</script>

<style>
    button{
        margin-right: 5px;
    }
</style>