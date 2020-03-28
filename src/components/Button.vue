<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {}
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
    }
</style>
