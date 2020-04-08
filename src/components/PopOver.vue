<template>
    <div class="popover" @click="changePopOver">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="buttonWrapper">
            <slot></slot>
        </span>
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
                let x = () => {
                    this.visible = false
                    document.removeEventListener('click', x)
                }
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        let contentWrapper = this.$refs.contentWrapper
                        document.body.appendChild(contentWrapper)
                        let {left, top} = this.$refs.buttonWrapper.getBoundingClientRect()
                        contentWrapper.style.top = top + window.scrollY + 'px'
                        contentWrapper.style.left = left + window.scrollX + 'px'
                    })

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
    }

    .content-wrapper {
        height: 50px;
        position: absolute;
        border: 1px solid black;
        transform: translateY(-100%);
    }
</style>
