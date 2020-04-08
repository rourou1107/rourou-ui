<template>
    <div class="popover" @click="changePopOver">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'PopOver',
        data() {
            return {
                visible: false
            }
        },
        methods: {
            changePopOver() {
                let x = ()=>{
                    this.visible = false
                    document.removeEventListener('click',x)
                }
                this.visible = !this.visible
                if (this.visible === true) {
                    window.setTimeout(() => {
                        document.addEventListener('click', x)
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        position: relative;
        .content-wrapper {
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid black;
        }
    }
</style>
