<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon :name="name"  v-if="name&&!loading"></g-icon>
        <g-icon name="loading" class="loading" v-if="loading"></g-icon>
        <span class="content">
            <slot/>
        </span>
    </button>
</template>
<script>
    import Icon from "./Icon";
    export default {
        name: 'GButton',
        components: {
            'g-icon': Icon
        },
        props: {
            name: String,
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            },
            loading: {
                type: Boolean,
            }
        }
    };
</script>
<style lang="scss">
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button {
        height: $button-height;
        padding: 0 1em;
        background-color: $button-bg;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        color: $color;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        font-size: $font-size;
        &:active {background-color: $button-active-bg;}

        &:hover {border: 1px solid $border-color-hover;}

        &:focus {outline: none;}

        .icon {order: 1;margin-right: .1em;}

        .content {
            height: auto;
            font-size: inherit;
            order: 2;
        }

        &.icon-right {
            .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }

            .content {
                order: 1;
            }
        }
        .loading {
            animation: 1s spin infinite linear;
        }
    }
</style>
