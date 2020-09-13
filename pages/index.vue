<template>
  <main class="[ container mx-auto ]">
    <MainNews />
    <LastNews />
  </main>
</template>

<script>
import LastNews from '../components/organisms/LastNews.vue'
import MainNews from '../components/organisms/MainNews.vue'
export default {
  name: 'Index',
  components: { MainNews, LastNews },
}
</script>

<style lang="scss" scoped></style>
