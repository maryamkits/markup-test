<template>
  <div
    class="[ flex mt-1-0 bg-dark-gray rounded-1-0 w-full mb-2-5 md:flex-col ]"
  >
    <div class="[ relative xs:hidden ] main-news">
      <div
        class="overlay [ md:rounded-0 xs:rounded-bl-0-4 xs:rounded-br-0-4 ]"
      ></div>
      <img
        :src="newsList[0].img"
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
          {{ newsList[0].text }}
        </h2>
        <span class="[ mt-1-0 xs:hidden ]">{{ newsList[0].desc }}</span>
        <Dots :items="newsList" type="mainNews" />
      </div>
    </div>
    <div class="[ pl-2-8 pr-1-75 pt-3-3 md:hidden ]">
      <News
        v-for="(news, index) in newsList.slice(1)"
        :key="index"
        :item="news"
        class="[ mb-1-5 ]"
      />
    </div>
    <div class="[ hidden md:flex items-center w-full h-auto xs:hidden ]">
      <client-only>
        <svgicon
          original
          name="prev"
          class="[ w-3-0 h-1-0 ]"
          @click="prevEl()"
        />
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
          <svgicon
            original
            name="next"
            class="[ w-3-0 h-1-0 ]"
            @click="nextEl()"
          />
        </client-only>
      </client-only>
    </div>
    <div class="[ hidden xs:block h-180 relative ]">
      <client-only>
        <swiper
          ref="mySwiperMobile"
          :options="mobileOptions"
          class="[ h-full w-full ]"
          @slideChange="changeSwiperIndexMobile"
        >
          <swiper-slide v-for="(news, index) in newsList" :key="index">
            <div class="[ relative h-full ]">
              <div class="overlay [ rounded-bl-0-4 rounded-br-0-4 ]"></div>
              <img
                :src="news.img"
                alt="main-news"
                class="[ w-full h-full object-cover rounded-bl-0-4 rounded-br-0-4 ]"
              />
              <div
                class="[ absolute bottom-2-0 text-white flex flex-col w-full items-center mr-0 left-0 ]"
              >
                <div>
                  <RedButton title="ეროვნული ნაკრები" />
                </div>
                <h2 class="[ text-1-0 mt-1-16 mx-1-0 ]">
                  {{ news.text }}
                </h2>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="[ absolute bottom-1-0 left-0 z-2 w-full pointer-events-none justify-center hidden xs:flex ] dots"
        >
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="[ w-5 h-5 rounded-full bg-gray-dot mr-5 custom-pagination_icon ]"
            :class="{ active: index === isActiveMob }"
          ></div>
        </div>
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
      isActive: 0,
      isActiveMob: 0,
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
      mobileOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 1,
      },
      newsList: [
        {
          img: '/images/main-img.png',
          text: 'ეხორვატია 2:1 საქართველო',
          type: 'ერ. ნაკრები',
          desc:
            '19 ნოემბერს, საქართველოს ეროვნული ნაკრები წლის ბოლოს შეხვედრაში ხორვატიას დაუპირისპირდა. პულას ალდო დროსინას სახელობის სტადიონზე გამართული ამხანაგური მატჩი ორმხრივი…',
        },
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    swiperMobile() {
      return this.$refs.mySwiperMobile.$swiper
    },
  },
  methods: {
    changeSwiperIndex() {
      this.isActive = this.swiper.activeIndex
    },
    changeSwiperIndexMobile() {
      this.isActiveMob = this.swiperMobile.activeIndex
    },
    prevEl() {
      if (this.isActive === 0) {
        this.isActive = 0
      } else {
        this.isActive = this.isActive - 1
      }
      this.swiper.slideTo(this.isActive, 1000, false)
    },
    nextEl() {
      if (this.isActive * 2 !== this.newsList.length) {
        this.isActive = this.isActive + 1
      }
      this.swiper.slideTo(this.isActive, 1000, false)
    },
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
.custom-pagination_icon {
  &.active {
    background: white;
  }
}
</style>
