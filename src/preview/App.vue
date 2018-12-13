<template>
  <div id="app">
    <drop-header></drop-header>

    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <drop-input></drop-input>
    <h2>组件列表</h2>

    <drop-footer></drop-footer>
  
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to vue-package-front"
    };
  }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    text-align: center;
    color: #2c3e50;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
