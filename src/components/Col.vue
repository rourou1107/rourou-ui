<template>
    <div class="col" :class="span && `col-${span}`">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GCol',
        props: {
            span: [Number, String]
        }
    };
</script>
<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 50px;
        border: 1px solid red;
        $class: col-;
        @for $n from 1 through 24 {

            &.#{$class}#{$n} { /*类似于 js 中的 ${n}*/
                width: ($n/24)*100%
            }
        }
    }
</style>
