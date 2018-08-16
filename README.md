# drop-element

> vue组件库（可作为一个快速开发vue组件并发布到npm的模版）

## 完整引入drop-element

``` bash
    import Vue from 'vue';
    import DropElement from 'drop-element';
    import App from './App.vue';

    Vue.use(DropElement);

    new Vue({
    el: '#app',
    render: h => h(App)
    });

```

## 做为vue组件模版

``` bash

    $ git clone https://github.com/raintao/drop-element.git
    $ cd drop-element
    $ npm install
    $ npm start
    
``` 

## 也可利用[drop-cli](https://github.com/raintao/drop-cli.git)脚手架安装模版

#### 1. 安装drop-cli

```
$ npm install drop-cli -g
$ drop-cli list

```

#### 2.选择模板并创建自己的项目

```
$ drop-cli init
$ gulp-html-front // 输入一个模版
$ gulp-html-test  // 输入自己的项目名称
$ cd gulp-html-test
$ npm install

```

