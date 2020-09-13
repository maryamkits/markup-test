<template>
  <a
    href="/"
    class="[ inline-flex py-0-5 px-1-0 bg-white rounded-2-0 inline-block md:px-1-5 xs:text-1-0 ]"
  >
    <span v-if="ball">
      <client-only>
        <svgicon original name="ball" class="[ h-17 w-17 mr-1-0 ]" />
      </client-only>
    </span>
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'WhiteButton',
  props: {
    title: {
      type: String,
      default: 'ბილეთები',
    },
    ball: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
