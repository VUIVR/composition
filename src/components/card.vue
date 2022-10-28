<template>
  <transition name="modal">
    <article className='card'>
        <h2 className='card__header'> Card №{{ props.info.id }} </h2>
        <img :src='props.info.url' alt='img' className='card__img'>
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
        width: inherit;
        height: 200px;
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