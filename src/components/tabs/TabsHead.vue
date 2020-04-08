<template>
    <div class="tabs-head" ref="tabsHead">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line" v-if="active"></div>
    </div>
</template>

<script>
    export default {
        name: 'GTabsHead',
        data() {
            return {
                active: true
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (itemName, vm) => {
                if (vm.disabled) {
                    this.active = false
                    return
                }
                this.active = true
                this.$nextTick(() => {
                    const {width, left} = vm.$el.getBoundingClientRect()
                    const left2 = this.$refs.tabsHead.getBoundingClientRect().left
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.left = `${left - left2}px`
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    $height: 40px;
    $border-color: #ccc;
    $blue: blue;
    .tabs-head {
        display: flex;
        align-items: center;
        position: relative;
        height: $height;
        border-bottom: 1px solid $border-color;

        > .actions-wrapper {
            margin-left: auto;
        }

        > .line {
            position: absolute;
            bottom: 0;
            border: 1px solid $blue;
            transition: all 500ms;
        }
    }
</style>
