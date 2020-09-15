<template>
  <div class="[ flex flex-col xs:mb-2-0 ]">
    <Title />
    <div class="[ flex flex-wrap justify-between xs:hidden ]">
      <LastNewsBox
        v-for="(news, index) in lastNews"
        :key="index"
        :item="news"
      />
    </div>
    <div class="[ hidden xs:block xs:h-30-0 ]">
      <swiper ref="mySwiper" :options="swiperOptions" class="[ h-full w-full ]">
        <swiper-slide
          v-for="(news, index) in lastNews"
          :key="index"
          class="[ my-1-0 h-28-5 ]"
        >
          <LastNewsBox :item="news" />
        </swiper-slide>
        <!-- <div slot="pagination" class="swiper-pagination"></div> -->
      </swiper>
    </div>
    <div class="[ flex justify-center mt-4-3 mb-2-0 xs:mt-2-0 relative ]">
      <Dots :items="lastNews" />
      <RedButton title="ყველა სიახლე" class="[ text-1-3 ]" />
    </div>
  </div>
</template>

<script>
import Dots from '../molecules/Dots.vue'
import LastNewsBox from '../molecules/LastNewsBox.vue'
import RedButton from '../atoms/RedButton'
import Title from '../atoms/Title.vue'
export default {
  name: 'LastNews',
  components: { Title, RedButton, LastNewsBox, Dots },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,
      },
      lastNews: [
        {
          img: '/images/football1.png',
          text: 'ფუტსალი | გერმანია 1:3 საქართველო',
          desc:
            'საქართველოს ფუტსალის ეროვნულმა ნაკრებმა ევრო 2022-ის გამარჯვებით დაიწყო. ავთანდილ ასათიანის გუნდი ჯგუფის პირველ შეხვედრაში გერმანიას დაუპირისპირდა და მეტოქე...',
          type: 'U16',
          date: '15 თებერვალი 2020',
        },
        {
          img: '/images/gff.png',
          text:
            'ეროვნული კატეგორიის C ლიცენზიის მქონე მწვრთნელთა გადამზადების კურსების მონაწილეებს კუთვნილი ლიცენზიები გადაეცათ',
          desc:
            'მიხეილ მესხის სახელობის სტადიონზე საქართველოს ფეხბურთის ფედერაციის პირველმა ვიცე პრეზიდენტმა, კახა ჭუმბურიძემ, თბილისის ფეხბურთის ფედერაციის პრეზიდენტთან…',
          type: 'ერ. ნაკრები',
          date: '15 თებერვალი 2020',
        },
        {
          img: '/images/football1.png',
          text:
            'საქართველოს 16-წლამდე ნაკრები ისრაელში საერთაშორისო ტურნირზე გაემგზავრა',
          desc:
            'საქართველოს 16-წლამდე ნაკრები ისრაელში საერთაშორისო ოთხთა ტურნირზე გაემგზავრა. ზურაბ ხიზანიშვილის გუნდი მასპინძელ ისრაელთან ერთად პოლონეთისა…',
          type: 'U16',
          date: '15 თებერვალი 2020',
        },
        {
          img: '/images/football2.png',
          text: 'უეფას მწვრთნელთა განათლების Pro ლიცენზიის კურსი დასრულდა',
          desc:
            'დავით პეტრიაშვილი არენაზე უეფას მწვრთნელთა განათლების უმაღლესი საფეხურის, Pro ლიცენზიის მეთორმეტე დასკვნითი მოდული გაიმართა. მე-12  მოდულის ფარგლებში, რომელიც…',
          type: 'ერ. ნაკრები',
          date: '15 თებერვალი 2020',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.dots {
  :first-child {
    background: theme('colors.red');
  }
}
</style>
