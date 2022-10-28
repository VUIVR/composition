<template>
  <transition name="modal">
    <div class='modal' v-if='props.flag' @click.self='closeModal'>
        <div class='modal__window'>
            <h3 className='modal__header'>Create new item</h3>
            <form class='modal__form'>
                <div>
                    <div className='modal__title' for='name'> Name: </div>
                    <input className='modal__input' id='name' name='name' type='text'>
                </div>
                <div>
                    <label className='upload'>
                        <span class='upload__file-name' type='text'></span>
                        <input type='file' name='file'>
                        <span class='upload__btn'>Choose file</span>
                    </label>
                </div>
                <div>
                    <div className='modal__title' for='desc'> Description </div>
                    <textarea className='modal__input' id='desc' name='description' rows='3'>Text area</textarea>
                </div>
                <div className='chekbox'>
                    <input className='chekbox__input' type='checkbox' name='check' id='checkbox'>
                    <label className='chekbox__label' for='checkbox'>Show </label>
                </div>
                <div class='modal__btn-block'>
                    <button class='modal__btn modal__btn_disable' @click.prevent=''>OK</button>
                    <button class='modal__btn' @click.prevent='closeModal'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  </transition>
</template>

<script setup>
    const props = defineProps({
        flag: Boolean
    })

    const emit = defineEmits(['closeModal'])
    function closeModal () { emit('closeModal') }

</script>

<style lang='scss'>
  @import '../assets/style/_colors.scss';
  @import '../assets/style/_mixins.scss';
  @import '../assets/style/_transitions.scss';

    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: $background-color-black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $main-blue;
        text-align: left;

        &__window {
            width: 300px;
            padding: 10px;
            background-color: $background-color-white;
            border: 1px solid $main-blue;
            border-radius: 5px;
            gap: 10px;
        }

        &__header {
            text-align: center;
            margin: 0 -10px;
            padding-bottom: 10px;
            border-bottom: 1px solid $main-blue;
        }

        &__form {
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            gap: 15px
        }

        &__input {
            outline: none;
            padding: 10px 5px;
            border: 1px solid $main-blue;
            width: 100%;
        }

        &__title {
            margin-bottom: 3px;

            &_inline {
                display: inline;
            }
        }

        &__btn-block {
            display: flex;
            justify-content: space-evenly;
        }

        &__btn {
            @include btn-blue()
        }
    }

    .upload {
	    display: flex;

        &__file-name {
            text-align: left;
            display: block;
            padding: 10px 5px;
            min-height: 38px;
            min-width: 166px;
            width: 100%;
            border: 1px solid $main-blue;
            border-radius: 5px 0 0 5px;
        }

        &__btn {
            @include btn-blue();
            background-color: $main-blue;
            color: $background-color-white;
            border-radius: 0 5px 5px 0;
            min-width: fit-content;
        }

        & input[type=file] {
            position: absolute;
            z-index: -1;
            opacity: 0;
            display: block;
            width: 0;
            height: 0;
        }
    }

    .chekbox {
        &__input {
            position: absolute;
            z-index: -1;
            opacity: 0;

            & + label {
                display: inline-flex;
                align-items: center;
                user-select: none;
            }

            & + label::before {
                content: '';
                display: inline-block;
                align-items: center;
                width: 14px;
                height: 14px;
                border: 1px solid $main-blue;
                border-radius: 5px;
                margin-right: 5px;
                border-color: $main-blue;
                background: url('../assets/icons/checkbox-default.svg') no-repeat center;
            }

            &:checked + label::before {
                background: url('../assets/icons/checkbox-active.svg') no-repeat center;
            }
        }


    }

</style>