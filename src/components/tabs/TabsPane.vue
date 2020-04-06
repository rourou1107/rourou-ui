<template>
    <div class="tabs-pane">
        <div class="pane" v-if="active">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GTabsPane',
        data(){
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name)=>{
                this.active = name === this.name
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {
        > .pane {
        }
    }
</style>
