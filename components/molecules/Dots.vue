<template>
  <div
    class="[ absolute left-0 z-2 w-full pointer-events-none justify-center hidden xs:flex ] dots"
    :class="[type === 'mainNews' ? '-bottom-8 h-5' : '-top-20 h-2-0']"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="[ w-5 h-5 rounded-full bg-gray-dot mr-5 ]"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Dots',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
