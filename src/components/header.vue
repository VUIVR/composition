<template>
    <header className='header'>
        <Burger @click='viewMenu' />
        <div className='header__logo'>
            <img src='../assets/logo.png' alt='logo'>
            <span>Butterfly</span>
        </div>
        <div></div>
    </header>
</template>

<script setup>
    import { useStore } from 'vuex'
    import Burger from './burger.vue'
    import Footer from '@/components/footer.vue'

    const store = useStore()

    function viewMenu () { store.dispatch('viewMenu') }

</script>

<style lang='scss'>
    @import '../assets/style/_colors.scss';
    @import '../assets/style/_breakpoint.scss';

    .header {
        position: sticky;
        top: 0;
        height: 50px;
        width: 100%;
        background-color: $main-blue;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $text-color-header;

        &__logo {
            font-size: 25px;
            display: flex;
            align-items: center;

            img {
                margin-right: 5px;
                height: 30px;
            }

            @media ( min-width: $tablet ) {
            height: 75px;
        }
        }

    }

    @media ( min-width: $tablet ) {
        .header {
            height: 75px;

            &__logo {
                img {
                    height: 45px;
                }
            }
        }
    }
</style>