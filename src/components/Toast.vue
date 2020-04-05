<template>
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
                default(){
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableAddHtml: {
                type: Boolean,
                default: false
            }
        },
        created() {
            if(this.autoClose){
                window.setTimeout(()=>{
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        mounted() {
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })

        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
                if(this.closeButton && this.closeButton.callback) {
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
    .toast {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
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
</style>
