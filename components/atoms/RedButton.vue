<template>
  <a
    href="/"
    class="[ py-1-0 px-2-0 bg-red text-white rounded-2-0 inline-block md:px-1-5 md:py-0-5 xs:text-1-0 ]"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'RedButton',
  props: {
    title: {
      type: String,
      default: 'ბილეთები',
    },
  },
}
</script>

<style lang="scss" scoped></style>
