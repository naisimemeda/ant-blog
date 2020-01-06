<template>
  <div id="wrap">
    <TheHeader/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
  @import "./styles/main.scss";
  @import "./styles/extra.scss";
</style>
