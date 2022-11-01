<template>
  <div class='main'>
    <section>
      <button class='main__btn' @click='openModal'>Add Item</button>
    </section>
    <CardList v-if="route.fullPath === '/content'" />
    <Modal :flag='flagViewModal' @closeModal='closeModal' />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import Modal from '@/components/modal.vue'
  import CardList from '@/components/card-list.vue'

  const route = useRoute()

  let flagViewModal = ref(false)
  function openModal (flag) { flagViewModal.value = true }
  function closeModal () { flagViewModal.value = false }
</script>

<style lang='scss'>
  @import '../assets/style/_colors.scss';
  @import '../assets/style/_mixins.scss';
  @import '../assets/style/_breakpoint.scss';

  .main {
    min-height: calc(100vh - 100px);
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;

    &__btn {
      @include btn-blue();
      width: fit-content;
      margin-bottom: 10px;
    }

    @media ( min-width: $tablet ) {
      padding: 20px;
      min-height: calc(100vh - 150px)
    }
  }
</style>