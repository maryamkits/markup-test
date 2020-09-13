<template>
  <div
    class="[ flex mt-1-0 bg-dark-gray rounded-1-0 w-full mb-2-5 md:flex-col ]"
  >
    <div class="[ relative ] main-news">
      <div
        class="overlay [ md:rounded-0 xs:rounded-bl-0-4 xs:rounded-br-0-4 ]"
      ></div>
      <img
        src="/images/main-img.png"
        alt="main-news"
        class="[ rounded-tl-1-0 rounded-bl-1-0 w-full h-full object-cover md:rounded-0 md:rounded-tl-1-0 md:rounded-tr-1-0 xs:rounded-0 xs:rounded-bl-0-4 xs:rounded-br-0-4 ]"
      />
      <div
        class="[ absolute bottom-3-0 left-2-5 text-white flex flex-col mr-3-6 md:bottom-1-5 xs:w-full xs:flex xs:items-center xs:mr-0 xs:left-0 ]"
      >
        <div>
          <RedButton title="ეროვნული ნაკრები" />
        </div>
        <h2 class="[ text-2-5 mt-2-0 md:text-1-14 md:mt-1-25 ]">
          ხორვატია 2:1 საქართველო
        </h2>
        <span class="[ mt-1-0 xs:hidden ]"
          >19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში
          ხორვატიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე
          გამართული ამხანაგური მატჩი ორმხრივი…</span
        >
        <Dots :items="newsList" type="mainNews" />
      </div>
    </div>
    <div class="[ pl-2-8 pr-1-75 pt-3-3 md:hidden ]">
      <News
        v-for="(news, index) in newsList"
        :key="index"
        :item="news"
        class="[ mb-1-5 ]"
      />
    </div>
    <div class="[ hidden md:flex items-center w-full h-auto xs:hidden ]">
      <client-only>
        <svgicon original name="prev" class="[ w-3-0 h-1-0 ]" />
      </client-only>
      <client-only>
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="[ h-full w-full ]"
        >
          <swiper-slide
            v-for="(news, index) in newsList"
            :key="index"
            class="[ my-1-0 ]"
          >
            <News :item="news" />
          </swiper-slide>
        </swiper>
        <client-only>
          <svgicon original name="next" class="[ w-3-0 h-1-0 ]" />
        </client-only>
      </client-only>
    </div>
  </div>
</template>

<script>
import News from '../molecules/News.vue'
export default {
  name: 'MainNews',
  components: {
    News,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      newsList: [
        {
          img: '/images/main-img.png',
          text: 'ეროვნული ნაკრები | ხორვატია 2:1 საქართველო',
          type: 'ერ. ნაკრები',
        },
        {
          img: '/images/gff.png',
          text: 'U16 | საქართველო 2:0 ბელარუსი',
          type: 'ნაკრები U16',
        },
        {
          img: '/images/football1.png',
          text: 'U16 | საქართველო 2:0 ბელარუსი',
          type: 'ნაკრები U16',
          ball: true,
        },
        {
          img: '/images/football2.png',
          text: 'ფუტსალი | გერმანია 1:3 საქართველო',
          type: 'ნაკრები U16',
          ball: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, #f000, #07161f);
  opacity: 0.5;
  transition: opacity 1s ease-in;
}
.main-news {
  &:hover {
    .overlay {
      opacity: 1;
      transition: opacity 1s ease-out;
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  color: theme('colors.white');
  --swiper-navigation-size: 14px;
}
.dots {
  :first-child {
    background: theme('colors.white');
  }
}
</style>
