<template>
    <div class='burger-btn'></div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
   @import '@/assets/style/_colors.scss';
   @import '../assets/style/_breakpoint.scss';

    .burger-btn {
        width: 30px;
        height: 30px;
        background: url('@/assets/icons/burger.svg') no-repeat center;
        cursor: pointer;
        border: 1px $text-color-header solid;
        border-radius: 5px;
        transition: box-shadow 0.2s ease-in;


        &:hover {
            transition: box-shadow 0.2s ease-in;
            box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.5);
        }
    }

    @media ( min-width: $tablet ) {
      .burger-btn {
        width: 45px;
        height: 45px;
        background-size: contain;
      }
    }
</style>