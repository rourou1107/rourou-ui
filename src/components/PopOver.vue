<template>
    <div class="popover" @click="changePopOver" ref="popover">
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
            onClickDocument(e) {
                // 点的是 div.popover 或者是它里面的元素，document就不管了
                if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
                    return
                }
                this.close()

            },
            positionPopOver() {
                let contentWrapper = this.$refs.contentWrapper
                document.body.appendChild(contentWrapper)
                let {left, top} = this.$refs.buttonWrapper.getBoundingClientRect()
                contentWrapper.style.top = top + window.scrollY + 'px'
                contentWrapper.style.left = left + window.scrollX + 'px'
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionPopOver()
                })
                window.setTimeout(() => {
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){ // 收尾的工作放在一个地方，不要分散
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            changePopOver(e) {
                if (this.$refs.buttonWrapper && this.$refs.buttonWrapper.contains(e.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
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
