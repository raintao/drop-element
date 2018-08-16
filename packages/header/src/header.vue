<template>
    <header class="drop-header">{{ title || "这是标题" }}</header>
</template>

<script>
  export default {
    name: 'DropHeader',
    props:['title'],
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
.drop-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: #000;
    font-size: 14px;
    color: #fff;
    text-align: center;
}
</style>
