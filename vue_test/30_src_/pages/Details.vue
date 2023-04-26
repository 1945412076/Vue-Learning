<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>

        <ul>
            <li>消息编号：{{id}}</li>
            <li>消息标题：{{$route.query.title}}</li>
        </ul>

</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Details',
        computed:{
            // eslint-disable-next-line vue/return-in-computed-property
            id(){
                return this.$route.query.id
            },
        },  
        mounted(){
            console.log(this.$route);
        },
    }
</script>

<style>

</style>