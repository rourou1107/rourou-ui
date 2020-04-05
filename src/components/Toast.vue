<template>
    <div class="wrapper" :class="positionClass">
        <div class="toast" ref="toast">
            <div class="content" v-if="!enableAddHtml">
                <slot></slot>
            </div>
            <div v-else v-html="$slots.default[0]"></div>
            <div class="line" ref="line"></div>
            <span v-if="closeButton" class="close" @click="close">
            {{closeButton.text}}
        </span>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'GToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableAddHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            positionClass() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyle()
        },
        methods: {
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    window.setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$destroy()
                if (this.closeButton && this.closeButton.callback) {
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $toast-min-height: 40px;
    $backgroundColor: rgba(0, 0, 0, 0.75);
    $font: 14px;
    @keyframes side-down {
        0%{
            opacity: 0;
            transform: translateY(-100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes side-up {
        0%{
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-in {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    // wrapper 控制左右居中，toast 控制动画
    .wrapper {
        transform: translateX(-50%);
        position: fixed;
        left: 50%;
        &.position-top {
            top: 0;
            > .toast {
                animation: 1s side-down;
            }
        }

        &.position-bottom {
            bottom: 0;
            > .toast {
                animation: 1s side-up;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateY(-50%, -50%);
            > .toast {
                animation: 1s fade-in;
            }
        }
        .toast {
            display: flex;
            align-items: center;
            margin: auto;
            min-height: $toast-min-height;
            font-size: $font;
            background-color: $backgroundColor;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 0 16px;
            > .content {
                padding: 14px 0;
            }

            > .line {
                border: 1px solid #666;
                margin-left: 16px;
            }

            > .close {
                flex-shrink: 0;
                padding-left: 16px;
            }
        }
    }

</style>
