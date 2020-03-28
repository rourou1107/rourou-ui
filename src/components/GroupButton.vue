<template>
    <div class="g-group-button">
        <slot></slot>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .g-group-button {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
        }
        > .g-button:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        > .g-button:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        > .g-button:not(first-child) {
            margin-left: -1px; /*解决2个按钮的左右border连在一起问题*/
        }
        > .g-button:hover { /*解决鼠标悬浮时border可能会缺失一边的问题*/
            position: relative;
            z-index: 1;
        }
    }
</style>
