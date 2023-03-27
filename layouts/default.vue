<template>
  <component :is="component"/>
</template>

<script>
import Desktop from '@/components/layouts/Desktop';
import Mobile from '@/components/layouts/Mobile';
export default {
  components: { Desktop, Mobile },
  data: () => ({
  }),
  computed: {
    component () {
      return this.$device.isMobile ? 'mobile' : 'desktop'
    }
  },

  async created () {},
  mounted () {}
}
</script>
