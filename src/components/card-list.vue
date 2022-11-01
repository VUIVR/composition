<template>
    <section class='card-list'>
        <Card v-for='card in cardList' :key='card.id' :info="card" />
    </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Card from './card.vue'

  const cardList = ref([])

  async function getCard () {
    cardList.value = await fetch('https://jsonplaceholder.typicode.com/photos?&_limit=20')
        .then(response => response.json())
    }

 onMounted(getCard)
</script>

<style lang='scss'>
    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
</style>