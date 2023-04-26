export default {
    install(Vue,x,y,z){
        console.log(x,y,z);
        //设置全局过滤器
        Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		});
        //定义全局指令
        Vue.directive('fbind',{
            bind(element,binding){
                console.log(element,binding);
                element.value=binding.value
            },
            // eslint-disable-next-line no-unused-vars
            inserted(element,binding){
                element.focus()
            },
            updated(element,binding) {
                element.value = binding.value
            },
        })
    }
}