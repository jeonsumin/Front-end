<template>
<div>
  <main class="content">
    <nuxt/>
  </main>
</div>
</template>

<script>
export default {
  head: () => ({
    link:[
      {
        rel:'stylesheet',
        href:'/mobile/css/common.css'
      }
    ]
  })
}
</script>

<style scoped>

</style>
