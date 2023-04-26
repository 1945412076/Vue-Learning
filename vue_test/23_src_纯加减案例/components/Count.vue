<template>
  <div>
    <h3>数据总和{{sum}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click='add()'>+</button>
    <button @click='unadd()'>-</button>
    <button @click='oddNumber()'>奇数相加</button>
    <button @click='waitadd()'>等一等再加</button>

  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Count',
        data(){
            return{  
                sum:0,
                n:1,
            }
        },
        methods:{
            add(){
                this.sum+=this.n
            },
            unadd(){
                this.sum-=this.n
            },
            oddNumber(){
                if(this.n%2!==0)
                {this.sum+=this.n}
            },
            waitadd(){
                setTimeout(()=>{
					this.sum += this.n
				},500)
            }
        }
    }
</script>

<style>
    button{
        margin-right: 5px;
    }
</style>