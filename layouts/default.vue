<template>
  <div :class="(getNumberOfTime === 2)? 'dark_bg' : ''">
      <input type="checkbox" name="expandFull" id="expandDataVisulationFull">
      <Nuxt />
  </div>
</template>
<script>
export default {
    computed:{
        getNumberOfTime() {
            return this.$store.state.webpage.numberOfTime;
        }
    }
}
</script>
