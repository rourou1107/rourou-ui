<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        // 先创建爸爸，再创建儿子。儿子挂到爸爸上，爸爸再挂载
        // 所以爸爸挂载后，儿子一定也挂载了
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>
