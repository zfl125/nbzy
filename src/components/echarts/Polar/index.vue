<template>
  <div id="bar" ref="bar" class="bar"></div>
</template>
<style lang="scss">
</style>
<script>
import echarts from "echarts";

export default {
  props: ["dataSource"],
  watch: {
    dataSource: {
      handler(data) {
        if (!data) return;
       try {
        this.setacherts(data);
        } catch (error) {
          console.log(error)
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    setacherts(mooe) {
      if (!mooe) return;
      var myChart = echarts.init(this.$refs.bar);
      var max=0;
      for (let i = 0; i < mooe.value.length; i++) {
        max+=mooe.value[i]*1.5
      }
      var option = {
        polar: {
          radius: [30, "90%"],
        },
        angleAxis: {
          max: max,
          startAngle: 90,
          show: false,
          clockwise: false,
        },
        radiusAxis: {
          type: "category",
           show: false,
        },
        tooltip: {},
        series: [
          {
            type: "bar",
            color: ["rgba(6, 237, 154, 1)"],
            data: [
              mooe.value.map((item, index) => {
                return {
                  name: mooe.name[index],
                  value: item,
                };
              })[0],
            ],
            coordinateSystem: "polar",
          },
          {
            type: "bar",
            color: ["rgba(7, 153, 255, 1)"],
            data: [
              mooe.value.map((item, index) => {
                return {
                  name: mooe.name[index],
                  value: item,
                };
              })[1],
            ],
            coordinateSystem: "polar",
          },
        ],
      };
      myChart.setOption(option, true);
       myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    setlegendHeight(length) {
      // 7
      var len = "0%";
      if (length > 0 && length < 1) {
        len = 40 - length * 7.1 + "%";
      }
      return len;
    },
  },
};
</script>