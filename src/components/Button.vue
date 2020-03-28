<template>
    <button class="g-button">
        <svg class="icon" aria-hidden="true" v-if="name">
            <use :xlink:href="`#i-${name}`"></use>
        </svg>
        <slot/>
    </button>
</template>
<script>
    export default {
        props:['name']
    }
</script>
<style lang="scss">
    .g-button {
        height: var(--button-height);
        padding: 0 1em;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        color: var(--color);
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
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }
</style>
