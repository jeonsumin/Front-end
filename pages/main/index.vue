<template>
  <component :is="component"/>
</template>

<script>
import Desktop from "@/components/page/main/Desktop";


export default {
  components: {Desktop},

  computed:{
    component() {
      return this.$device.isMobile ? "mobile" : "desktop";
    },
  }
}
</script>
