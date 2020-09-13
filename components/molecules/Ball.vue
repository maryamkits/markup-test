<template>
  <div class="[ group relative ]">
    <client-only>
      <svgicon
        original
        name="ball"
        class="[ h-17 w-17 mx-1-0 cursor-pointer ]"
      />
    </client-only>
    <div
      class="[ opacity-0 transition duration-200 ease-in group-hover:opacity-100 absolute bottom-140-percent -right-60-percent bg-white text-1-16 px-1-0 py-0-7 border border-solid border-gray-dot rounded-0-4 ] ball"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ball',
  props: {
    title: {
      type: String,
      default: 'ფუტსალი',
    },
  },
}
</script>

<style lang="scss" scoped>
.ball {
  box-shadow: 10px 8px 25px -10px rgb(0 0 0);
}
.ball:after {
  content: '';
  position: absolute;
  top: 100%;
  left: calc(50% - 8px);
  background: theme('colors.white');
  width: 13px;
  height: 11px;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
</style>
