<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GTabs',
        props: {
            selected: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.tabs{}
</style>
