<template>
    <svg aria-hidden="true" class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    // 引入 js 文件就代表运行了这个 js
    import '../svg';

    export default {
        props: ['name']
    };
</script>
<style lang="scss">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
