<template>
  <header>
    <div class="[ border-b-2 border-solid border-gray w-full md:hidden ]">
      <ul class="[ flex justify-center container mx-auto ]">
        <li
          v-for="(item, index) in topMenu"
          :key="index"
          class="[ flex items-center py-1-0 px-1-5 transition duration-500 ease-in-out bg-transparent text-1-0 hover:bg-gray ] menu-item"
        >
          <client-only>
            <svgicon original :name="item.icon" class="[ menu-icon h-18 ]" />
          </client-only>
          <nuxt-link :to="item.name" class="ml-0-7">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div
      class="[ flex justify-between container mx-auto pt-1-5 md:items-center ]"
    >
      <div class="[ hidden md:flex md:items-center ]">
        <div class="[ mr-1-75 ]">
          <div class="[ w-21 h-3 bg-red mb-4 rounded-0-4 ]"></div>
          <div class="[ w-21 h-3 bg-red mb-4 rounded-0-4 ]"></div>
          <div class="[ w-21 h-3 bg-red rounded-0-4 ]"></div>
        </div>
        <Lang class="[ hidden md:flex xs:hidden ]" />
      </div>
      <div class="[ mr-3-3 md:mr-0 ]">
        <client-only>
          <svgicon original name="Logo" class="[ h-70 xs:h-45 ]" />
        </client-only>
      </div>
      <div class="[ flex ]">
        <ul class="[ flex items-center md:hidden ]" @mouseleave="activeId = -1">
          <li
            v-for="item in menuData"
            :key="item.id"
            class="[ text-1-16 relative hover:text-red ] list"
            :class="{ active: activeId === item.id }"
            @mouseover="activeId = item.id"
          >
            <nuxt-link :to="item.name" class="[ ml-2-0 ]">
              {{ item.name }}
            </nuxt-link>
            <div
              class="[ absolute top-2-5 left-0 z-1 bg-gray rounded-0-4 ] inner-list"
            >
              <DropDown :list="item.children" />
              <div v-if="item.children" class="arrow"></div>
            </div>
          </li>
        </ul>
        <div class="[ flex items-center ]">
          <Live />
          <RedButton class="[ xs:hidden ]" />
          <Lang class="[ md:hidden ]" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DropDown from '../molecules/DropDown.vue'
import Live from '../atoms/Live.vue'
import Lang from '../atoms/Lang.vue'
import RedButton from '../atoms/RedButton'
export default {
  name: 'Header',
  components: {
    RedButton,
    Lang,
    Live,
    DropDown,
  },
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
    topMenu: {
      type: Array,
      default: () => [
        { name: 'ნაკრები', id: 0, icon: 'Logo' },
        { name: 'ფეხბურთის ფედერაცია', id: 1, icon: 'ffc' },
        { name: 'ეროვნული ლიგა', id: 3, icon: 'gff' },
        { name: 'ფეხბურთის ფედერაცია', id: 4, icon: 'gff' },
        { name: 'საქართველოს თასი', id: 5, icon: 'cup' },
      ],
    },
  },
  data() {
    return {
      activeId: -1,
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-icon {
  filter: grayscale(100%);
}
.menu-item {
  &:hover {
    .menu-icon {
      filter: grayscale(0);
    }
  }
}
.list {
  overflow: hidden;
  .inner-list {
    width: max-content;
    max-height: 0;
    transition: max-height 1s ease-out;
    overflow: hidden;
    ul {
      opacity: 0;
      transition: opacity 1s ease-out;
    }
    .arrow {
      &:after {
        content: '';
        position: absolute;
        top: -14px;
        left: calc(50% - 8px);
        background: theme('colors.gray');
        width: 21px;
        height: 18px;
        clip-path: polygon(0 100%, 100% 100%, 50% 0);
      }
    }
  }
  &.active {
    overflow: visible;
    .inner-list {
      max-height: 999px;
      transition: max-height 2s ease-in;
      overflow: visible;
      ul {
        opacity: 1;
      }
    }
  }
}
</style>
