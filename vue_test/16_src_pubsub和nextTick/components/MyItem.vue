<template>
    <li>
		<label>
			<input type="checkbox" 
			:checked="todo.done" 
			@change="handleCheck(todo.id)"
			/>
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input 
				type="text" 
				v-show="todo.isEdit" 
				:value="todo.title" 
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
			>
		</label>
		<button class="btn btn-danger"  @click="dislodge(todo.id)">删除</button>
		<button  class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        props:['todo'],
		methods: {
			handleCheck(id){
				this.$bus.$emit('checkTodo',id)
			},
			dislodge(id){
				if(confirm('确定删除吗'))
				// this.$bus.$emit('deleteTodo',id)
				pubsub.publish('deleteTodo',id)
			},
			//编辑
			handleEdit(todo){
				// eslint-disable-next-line no-prototype-builtins
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					// console.log('@')
					this.$set(todo,'isEdit',true)
				}
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
			//失去焦点回调（真正执行修改逻辑）
			handleBlur(todo,e){
				todo.isEdit = false
				if(!e.target.value.trim()) return alert('输入不能为空！')
				this.$bus.$emit('updateTodo',todo.id,e.target.value)
			}
		},
    }
</script>

<style>
/*item*/
li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>