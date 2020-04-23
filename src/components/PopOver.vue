<template>
    <div class="popover" @click="changePopOver" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="buttonWrapper" class="button-wrapper">
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
            close() { // 收尾的工作放在一个地方，不要分散
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
    $border-color: #999;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        position: relative;

        .button-wrapper {
            display: inline-block;
        }
    }

    .content-wrapper {
        position: absolute;
        max-width: 20em;
        border: 1px solid $border-color;
        transform: translateY(-100%);
        margin-top: -10px;
        padding: .5em 1em;
        border-radius: $border-radius;
        word-break: break-all;
        box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
        /*filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));*/
        background-color: #ffffff;

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
            left: 10%;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-top-color: $border-color;
        }

        &::before {
            top: 100%;
        }

        &::after {
            top: calc(100% - 1px);
            border-top-color: #ffffff;
        }
    }
</style>
