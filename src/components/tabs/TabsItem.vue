<template>
    <div class="tabs-item" @click="changeItem" :class="itemClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GTabsItem',
        data(){
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        computed: {
            itemClasses() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name)=>{
                this.active = name === this.name
            })
        },
        methods: {
            changeItem(){
                if(this.disabled) {
                    return
                }
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue: blue;
    $grey: #ccc;
.tabs-item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    cursor: pointer;
    &.active{
        color: $blue;
        font-weight: 600;
    }
    &.disabled {
        cursor: not-allowed;
        color: $grey;
    }
}
</style>
