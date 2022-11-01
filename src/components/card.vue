<template>
  <transition name="modal">
    <article className='card'>
        <h2 className='card__header'> Card №{{ props.info.id }} </h2>
        <div className='card__img'>
          <img :src='props.info.url' alt='img'>
        </div>
        <div className='card__desc'> {{ props.info.title }} {{ props.info.title }} {{ props.info.title }}</div>
    </article>
  </transition>
</template>

<script setup>
    const props = defineProps({
        info: Object
    })
</script>

<style lang='scss'>
  @import '../assets/style/_colors.scss';
  @import '../assets/style/_breakpoint.scss';

  .card {
    width: 300px;
    margin: 0 15px 15px 0;

    &__img {
        width: 300px;
        height: 200px;

        img {
          width: inherit;
          height: inherit;
        }
    }

    &__desc {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
                line-clamp: 2;
        -webkit-box-orient: vertical;
    }
  }
</style>