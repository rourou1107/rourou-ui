<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GTabsItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.tabs-item {

}
</style>
