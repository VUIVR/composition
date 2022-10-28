<template>
    <div class='footer'>
        <div class='footer__mail'>
            <a href='mailto:asostrovskiy@yandex.ru' target='_blank' title='Написать письмо'>ASOstrovskiy@yandex.ru</a>
        </div>
    </div>
</template>

<style lang='scss'>
    @import '../assets/style/_colors.scss';
    @import '../assets/style/_breakpoint.scss';

    .footer {
        height: 50px;
        padding: 10px;
        background-color: $main-blue;
        display: flex;
        justify-content: end;
        align-items: center;
        color: $text-color-footer;

        &__mail {
            font-style: italic;
        }

        @media ( min-width: $tablet ) {
            height: 75px;
        }
    }
</style>
vue