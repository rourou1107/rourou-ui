<template>
    <div class="toast">
        <slot></slot>
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
            }
        },
        created() {
            if(this.autoClose){
                window.setTimeout(()=>{
                    this.$el.remove()
                    this.$destroy()
                }, this.autoCloseDelay * 1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $toast-height: 40px;
    $backgroundColor: rgba(0, 0, 0, 0.75);
    $font: 14px;
    .toast {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: $toast-height;
        font-size: $font;
        background-color: $backgroundColor;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 0 16px;
    }
</style>
