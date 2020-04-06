<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GTabsHead'
    };
</script>

<style lang="scss" scoped>
    $height: 40px;
    .tabs-head {
        display: flex;
        align-items: center;
        height: $height;
        border: 1px solid red;
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>
