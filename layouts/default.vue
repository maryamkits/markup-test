<template>
  <div class="[ min-h-full flex flex-col ]">
    <HeaderComponent :menu-data="menuData" />
    <div class="w-full main md:pt-14-1">
      <nuxt />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '~/components/organisms/Header'
import '~/vectors'
export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      menuData: [
        {
          name: 'კაცთა ეროვნული',
          id: 0,
          children: [
            { name: 'მთავარი' },
            { name: 'შედეგები' },
            { name: 'კალენდარი' },
            { name: 'ახალი ამბები' },
            { name: 'ფოტო და ვიდეო' },
          ],
        },
        {
          name: 'ქალთა ეროვნული',
          id: 1,
          children: [{ name: 'მთავარი' }, { name: 'შედეგები' }],
        },
        { name: '21-წლამდელები', id: 3 },
        { name: 'ასაკობრივები', id: 4 },
        { name: 'ფუტსალი', id: 5 },
        { name: 'ფანშოპი', id: 6 },
      ],
    }
  },
}
</script>

<style lang="scss">
html {
  --FiraGO-Regular: 'FiraGO-Regular';
  color: theme('colors.text-gray');
}
</style>
