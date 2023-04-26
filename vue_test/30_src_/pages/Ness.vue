<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ul>
            <li v-for="(p) in digit" :key=" p.id">
                <!-- <router-link :to="`details?id=${p.id}&title=${p.title}`">{{p.title}}</router-link> -->
                <router-link :to="{
                    name:'details',
					query:{
						id:p.id,
						title:p.title
					}
                }"
                >
                    {{p.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
   </div>
</template>

<script>
// import { query } from 'express';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Ness',
        data() {
            return {
                digit:[
                    {id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}]
            }
        },
    }
</script>

<style>

</style>