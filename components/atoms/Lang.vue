<template>
  <div
    class="[ flex items-center relative z-999 bg-gray py-0-7 px-1-5 ml-1-0 md:pl-1-0 md:pr-0-7 ]"
    :class="[
      active
        ? 'rounded-tl-2-0 rounded-tr-2-0'
        : 'rounded-2-0 transition-all ease-in duration-200 delay-100',
    ]"
    @mouseover="active = true"
    @mouseleave="active = false"
  >
    <div class="[ flex justify-center items-center cursor-pointer ]">
      <div>
        <nuxt-link class="[ uppercase text-1-0 text-black ]" to="/">{{
          current
        }}</nuxt-link>
      </div>
      <div
        class="[ uppercase absolute top-100-percent left-0 z-999 bg-gray w-full px-1-5 rounded-bl-2-0 rounded-br-2-0 md:pl-1-0 md:pr-0-7 ]"
      >
        <ul
          :class="[active ? 'h-3-5' : '']"
          class="[ relative px-1-6 h-0 bg-transparent overflow-hidden transition-height ease-in duration-200 ]"
        >
          <li
            v-for="(lang, index) in languages"
            :key="index"
            class="[ cursor-pointer ]"
          >
            <nuxt-link to="/" class="text-1-0 hover:text-red">{{
              lang
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <span
      :class="[
        'block w-1-3 transition duration-200 transform ml-1-0',
        active ? 'rotate-180' : '',
      ]"
    >
      <client-only>
        <svgicon original name="downArrow" class="[ w-0-7 ]" />
      </client-only>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Lang',
  data() {
    return {
      active: false,
      current: 'ქარ',
      languages: ['eng', 'ru'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
