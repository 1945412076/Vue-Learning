<template>
<div class="todo-footer" v-show="total">
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{dotoTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="creatAll">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'MyFoots',
        props:['todos','checkAllTodo','clearAllTodo'],
        computed:{
          total(){
               return this.todos.length
          },
          
          dotoTotal:{
            get(){
              var i=0;
              this.todos.forEach(todos => {
                if(todos.done)
                i++
              });
              return i
            },
          },
          isAll:{
            get(){
              return this.donoTotal === this.total && this.total > 0
            },
            set(value){
              this.checkAllTodo(value)
            }
          }
        },
        methods: {
          creatAll(){
            this.clearAllTodo()
          }
        },
       
    }
</script>

<style>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>