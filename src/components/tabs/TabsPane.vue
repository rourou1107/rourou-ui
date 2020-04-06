<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GTabsPane',
        props: {
            name: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.tabs-pane {

}
</style>
