<template>
  <footer class="drop-footer">
    <div class="footer-drop-group">

      <!-- 遍历出选项 -->
      <a class="footer-drop-btn"
        v-for="v in list"
        :key="'item_'+v" 
        @click="clickItem(v)">
        {{ v }}
      </a>

    </div>
  </footer>
</template>

<script>
export default {
  name: "DropFooter",
  props: {
    items: Array
  },
  data () {
    return {
      list: [
        '选项1',
        '选项2',
        '选项3'
      ]
    }
  },
  created() {
    if (this.items) this.list = this.items
  },
  methods: {
    //点击选项
    clickItem(item) {
        this.$emit('change', item)
    }
  }
};
</script>

<style lang="scss" scoped>
//底部
.drop-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #000;
}

.footer-drop-group {
    display: flex;
    width: 100%;
    height: inherit;
    line-height: inherit;

    .footer-drop-btn {
        flex: 1;
        position: relative;
        font-size: 13px;
        color: #fff;
        text-align: center;

        &:not(:first-child) {
            &::before {
                position: absolute;
                top: 10px;
                left: 0;
                height: 26px;
                content: "";
                border-left: 1px solid rgba(255, 255, 255, 0.5);
            }
        }

        .iconfont {
            vertical-align: middle;
        }
    }
}
</style>
