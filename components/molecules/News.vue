<template>
  <section class="[ flex group cursor-pointer ]">
    <div class="[ flex md:flex-col-reverse md:justify-end ]">
      <div class="[ w-4 bg-white mr-4 rounded-1-0 md:w-full md:h-4 md:mt-4 ]">
        <div
          class="[ bg-white w-4 h-50-percent rounded-tl-1-0 rounded-tr-1-0 group-hover:bg-red transition ease-in-out duration-500 md:h-4 md:w-50-percent md:rounded-0 md:rounded-tl-1-0 md:rounded-bl-1-0 ]"
        ></div>
      </div>
      <div class="[ w-123 h-97 overflow-hidden ]">
        <img
          :src="item.img"
          :alt="item.type"
          class="[ h-full rounded-0-4 object-cover ]"
        />
      </div>
    </div>
    <div class="[ pl-1-16 md:pl-1-0 ]">
      <h4 class="[ text-white text-1-16 md:text-1-0 ]">{{ item.text }}</h4>
      <div class="[ mt-0-7 md:mt-0-5 ]">
        <WhiteButton
          :title="item.type"
          :ball="item.ball"
          class="[ text-blue hover:bg-red hover:text-white transition ease-in-out duration-200 ]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import WhiteButton from '../atoms/WhiteButton'
export default {
  name: 'News',
  components: { WhiteButton },
  props: {
    item: {
      type: Object,
      default: () => ({
        img: '/images/main-img.png',
        text: 'ეროვნული ნაკრები |  ხორვატია 2:1 საქართველო',
        type: 'ერ. ნაკრები',
      }),
    },
  },
}
</script>

<style lang="scss" scoped></style>
