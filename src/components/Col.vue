<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator = (obj) => {
        // ['span', 'offset']
        // ['span']
        // ['offset']
        let keys = Object.keys(obj)
        let validate = true
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
                validate = false
            }
        })
        return validate
    }
    export default {
        name: 'GCol',
        data() {
            return {
                gutter: 0
            }
        },
        props: {
            span: [Number, String],
            offset: [Number, String],
            phone: {
                type: Object,
                validator
            },
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widePc: {
                type: Object,
                validator
            },
        },
        computed: {
            colClass() {
                let {span, offset, phone, ipad, narrowPc, pc, widePc, getColClasses} = this
                return [
                    ...getColClasses({span, offset}),
                    ...getColClasses(phone, 'phone'),
                    ...getColClasses(ipad, 'ipad'),
                    ...getColClasses(narrowPc, 'narrow-pc'),
                    ...getColClasses(pc, 'pc'),
                    ...getColClasses(widePc, 'wide-pc'),
                ]
            },
            colStyle() {
                let {gutter} = this
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                }
            }
        },
        methods: {
            getColClasses(obj={}, str){
                let arr = []
                if(obj.span){
                    arr.push(`col-${str}-${obj.span}`)
                }
                if(obj.offset){
                    arr.push(`offset-${str}-${obj.offset}`)
                }
                return arr
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        height: 50px;
        border: 1px solid red;
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
        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media (min-width: 769px) and (max-width: 992px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media (min-width: 993px) and (max-width: 1200px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
    }
</style>
