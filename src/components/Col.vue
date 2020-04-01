<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GCol',
        props: {
            span: [Number, String],
            offset: [Number, String]
        }
    };
</script>
<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 50px;
        background-color: grey;
        border: 1px solid #000;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} { /*类似于 js 中的 ${n}*/
                width: ($n/24)*100%
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%
            }
        }
    }
</style>
