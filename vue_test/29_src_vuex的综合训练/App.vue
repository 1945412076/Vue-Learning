<template>
  <div id="app">
    <count/>
    <br>
    <Pare/>
  </div>
</template>

<script>

import Count from './components/Count.vue'
import Pare  from './components/pare.vue'

export default {
  name: 'App',
  components: { Count,Pare }
}
</script>

<style>

</style>
