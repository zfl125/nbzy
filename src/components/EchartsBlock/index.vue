<template>
  <div
    :class="{
      blockType1: styleType == 1,
      blockType2: styleType == 2,
      block_echarts: true,
    }"
  >
    <h3>{{ title }}</h3>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["styleType", "title"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.block_echarts {
  background-size: 100% 100%;
  margin-top: 10px;
  position: relative;
  h3 {
    font-size: 20px;
    height: 50px;
    line-height: 47px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgb(252, 252, 252);
    background-image: url(~@/assets/project_bg.png);
    background-repeat: no-repeat;
    width: 285px;
    background-position: center;
    background-size: 100% auto;
    background-position: left;
    padding-left: 20px;
  }
  .content {
    position: absolute;
    top: 30px;
    width: 100%;
    bottom: 0px;
  }
}

.blockType1 {
  width: 532px;
  height: 21.09vh;
}
.blockType2 {
  width: 812px;
  margin-left: 60px;
  height: 21.09vh;
}

</style>