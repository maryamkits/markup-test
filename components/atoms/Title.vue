<template>
  <div
    class="title-wrapper [ relative block text-2-1 flex flex-col items-center mb-3-0 cursor-pointer xs:text-1-14 xs:mb-0 ]"
  >
    <h1 class="title">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: {
      type: String,
      default: 'ბოლო სიახლეები',
    },
  },
}
</script>

<style lang="scss" scoped>
.title-wrapper {
  .title {
    display: inline-block;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      bottom: -5px;
      height: 4px;
      width: 4.3rem;
      left: 30%;
      background-color: red;
      transition: 0.4s ease-out all 0.1s;
    }
  }
  &:hover {
    .title::after {
      width: 90%;
      left: 5%;
      transition: 0.5s ease all;
    }
  }
}
</style>
