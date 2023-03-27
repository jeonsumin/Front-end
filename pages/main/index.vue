<template>
  <component
    :is="component"
    :reduction="reduction"
  />
</template>

<script>
import Desktop from "@/components/page/main/Desktop";

export default {
  components: {Desktop},
  async asyncData({$axios}) {
    const [reduction] = await Promise.all([
      $axios.$get('/api/reduction'),
    ])

    return {reduction}
  },
  data:() => ({
    reduction: [],
  }),
  computed:{
    component() {
      return this.$device.isMobile ? "mobile" : "desktop";
    },
  }
}
</script>
