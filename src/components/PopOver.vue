<template>
    <div class="popover" @click="changePopOver" ref="popover">
        <div class="content-wrapper" :class={[`position-${position}`]:true} v-if="visible" ref="contentWrapper">
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            onClickDocument(e) {
                // 点的是 div.popover 或者是它里面的元素，document就不管了
                if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
                    return
                }
                // popover 移到 body 下
                if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
                    return
                }
                this.close()

            },
            positionPopOver() {
                const contentWrapper = this.$refs.contentWrapper
                document.body.appendChild(contentWrapper)
                let {left, top, width, height} = this.$refs.buttonWrapper.getBoundingClientRect()
                const positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: top + window.scrollY + height,
                        left: left + window.scrollX
                    },
                    left: {
                        top: top + window.scrollY - (contentWrapper.getBoundingClientRect().height - height) / 2,
                        left: left + window.scrollX - contentWrapper.getBoundingClientRect().width
                    }
                    ,
                    right: {
                        top: top + window.scrollY - (contentWrapper.getBoundingClientRect().height - height) / 2,
                        left: left + window.scrollX + width
                    }
                }
                contentWrapper.style.top = positions[this.position].top + 'px'
                contentWrapper.style.left = positions[this.position].left+ 'px'

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
            width: 0;
            height: 0;
            border: 10px solid transparent;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10%;
            }

            &::before {
                top: 100%;
                border-top-color: $border-color;
            }

            &::after {
                top: calc(100% - 1px);
                border-top-color: #ffffff;
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10%;
            }

            &::before {
                bottom: 100%;
                border-bottom-color: $border-color;
            }

            &::after {
                bottom: calc(100% - 1px);
                border-bottom-color: #ffffff;
            }
        }

        &.position-left {
            margin-left: -10px;

            &::before {
                top: 50%;
                transform: translateY(-50%);
                left: 100%;
                border-left-color: $border-color;
            }

            &::after {
                top: 50%;
                transform: translateY(-50%);
                left: calc(100% - 1px);
                border-left-color: #ffffff;
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before {
                top: 50%;
                transform: translateY(-50%);
                right: 100%;
                border-right-color: $border-color;
            }

            &::after {
                top: 50%;
                transform: translateY(-50%);
                right: calc(100% - 1px);
                border-right-color: #ffffff;
            }
        }
    }
</style>
