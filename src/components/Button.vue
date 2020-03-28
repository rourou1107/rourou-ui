<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon :name="name"></g-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script>
    import Icon from "./Icon";
    export default {
        components: {Icon},
        props: {
            name: String,
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    };
</script>
<style lang="scss">
    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        color: var(--color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        font-size: var(--font-size);
        &:active {
            background-color: var(--button-active-bg);
        }

        &:hover {
            border: 1px solid var(--border-color-hover);
        }

        &:focus {
            outline: none;
        }

        .icon {
            order: 1;
            margin-right: .1em;
        }

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
    }
</style>
