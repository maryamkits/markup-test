<template>
  <section
    class="[ w-23-0 flex flex-col md:mb-3-0 xs:w-auto transition-all ease-in duration-200 ]"
  >
    <div class="[ flex flex-col mb-1-25 overflow-hidden ]">
      <img
        :src="item.img"
        alt=""
        class="[ w-full h-95-percent object-cover rounded-tl-0-4 rounded-tr-0-4 transform ease-in duration-700 hover:scale-1-1 ]"
      />
      <div
        class="[ w-full h-5-percent bg-red rounded-bl-0-4 rounded-br-0-4 ]"
      ></div>
    </div>
    <div class="[ text-1-3 text-dark-blue mr-4 md:text-1-14 xs:text-1-0 ]">
      {{ item.text }}
    </div>
    <div class="[ text-1-0 my-1-0 flex items-center xs:text-0-85 ]">
      <span class="[ text-red ]">{{ item.date }}</span>
      <span class="[ w-5 h-5 bg-gray-dot rounded-full ml-5 ]"></span>
      <Ball />
      <span class="[ text-blue ]">{{ item.type }}</span>
    </div>
    <p class="[ xs:text-0-85 ]">{{ item.desc }}</p>
  </section>
</template>

<script>
import Ball from './Ball.vue'
export default {
  name: 'LastNewsBox',
  components: {
    Ball,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
