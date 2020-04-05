<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GLayout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach(child => {
                if (child.$options.name === "GSider") {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex: 1;
        &.hasSider {
            flex-grow: 1;
            flex-direction: row;
        }
    }
</style>
