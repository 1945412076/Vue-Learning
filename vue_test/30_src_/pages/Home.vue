<template>
	<div>
		<h2>我是Home的内容</h2>
		<ul class="nav nav-tabs">
			<li>
				<router-link class="list-group-item" active-class="active" to="/home/ness">Ness</router-link>
			</li>
			<li>
				<router-link class="list-group-item" active-class="active" to="/home/mess">Mess</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name:'Home'
	}
</script>