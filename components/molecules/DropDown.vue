<template>
  <ul class="[ text-1-16 text-text-gray ]">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="[ pl-2-0 pr-3-0 mb-2-0 relative ]"
    >
      <nuxt-link :to="item.name">{{ item.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  li {
    &:first-child {
      margin-top: 2rem;
    }
  }
  a {
    &:hover {
      color: theme('colors.red');
      &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 5px;
        background-color: theme('colors.red');
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
