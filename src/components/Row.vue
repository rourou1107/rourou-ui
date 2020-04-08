<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.$data.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter / 2 + 'px',
                    marginRight: -gutter / 2 + 'px'
                }
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;

        &.align-center {
            justify-content: center;
        }

        &.align-left {
            justify-content: left;
        }

        &.align-right {
            justify-content: right;
        }
    }
</style>
