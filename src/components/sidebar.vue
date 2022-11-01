<template>
<transition name='slide-fade'>
  <aside
    className='sidebar'
    v-if='flagViewMenu'
    @click.self='closeMenu'
  >
    <div class='sidebar__menu'>

      <div className='sidebar__btn-close' @click.prevent='closeMenu'></div>
      <h2 className='sidebar__header'>Menu</h2>

      <nav className='sidebar__nav'>
        <ul className='sidebar__menu-list'>
          <router-link
            v-for="item in menuList"
            :key="item.name"
            :to='item.to'
            @click="closeMenu"
          >
            <li className='sidebar__menu-item'>
              {{item.name}}
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </aside>
</transition>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { ref, computed, watch } from 'vue'

  const store = useStore()
  let flagViewMenu = computed(() => store.getters.getViewMenu)

  function closeMenu (e) {
    (e.key === "Escape" || e.type === "click") && store.dispatch('viewMenu', false)
  }

  watch(flagViewMenu, (newValue, oldValue) => {
    if (newValue) {
      document.body.classList.add("body_fixed")
      window.addEventListener('keydown', closeMenu)
    } else {
      document.body.classList.remove("body_fixed")
      window.removeEventListener('keydown', closeMenu)
    }
  })

  const menuList = [
    {
      to: '/',
      name: 'Empty page'
    },
    {
      to: '/content',
      name: 'Content'
    }
  ]

</script>

<style lang='scss'>
  @import '../assets/style/_colors.scss';
  @import '../assets/style/_breakpoint.scss';

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    &__menu {
      width: 300px;
      height: 100%;
      padding: 20px 10px;
      border-right: 1px solid $main-blue;
      text-align: center;
      background-color: $background-color-white;
      position: relative;
    }

    &__header {
      margin: 0 -10px;
      padding-bottom: 10px;
      border-bottom: 1px solid $main-blue;
    }

    &__menu-list {
      list-style-type: none;
    }

    &__nav {
      padding-top: 10px;
      overflow: auto;
    }

    &__menu-item {
      margin: 5px 20px;
      border-bottom: 1px solid $main-blue;
      padding: 5px 15px;

      &:last-child {
        margin-bottom: 0;
      }

      .router-link-active & {
        cursor: none;
        background-color: $main-blue;
        color: $main-white;

        &:hover{
          background-attachment: $main-blue;
        }
      }

    }

    &__btn-close {
      height: 20px;
      width: 20px;
      position: absolute;
      top: 10px;
      right: 10px;
      background: url('../assets/icons/cross.svg') center;
      cursor: pointer;
    }
  }

  @media ( min-width: $tablet ) {
    .sidebar {
      &__menu-item {

        &:hover {
          background-color: $second-blue;
        }

        .router-link-active & {
        cursor: none;
        background-color: $main-blue;
        color: $main-white;

          &:hover{
            background-attachment: $main-blue;
          }
        }
      }
    }
  }

</style>