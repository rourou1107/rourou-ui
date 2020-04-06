<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'GTabs',
        data(){
            return {
                aaa: 1,
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
            this.eventBus.$emit('update:selected', this.selected)
        }
    }
</script>

<style lang="scss" scoped>
.tabs{}
</style>
