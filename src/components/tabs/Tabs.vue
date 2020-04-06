<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'GTabs',
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            selected: {
                type: String
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {}
</style>
