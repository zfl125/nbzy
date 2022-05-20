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
        // if (!data) return;
        this.$nextTick(() => {
          this.setacherts(data);
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    setacherts(mooe) {
      // if (!mooe) return;
      var myChart = echarts.init(this.$refs.bar);
      var option = {
        series: [
          {
            type: "gauge",
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 200,
            axisLine: {
              lineStyle: {
                width: 8,
                color: [
                  [0.3, "#2dff41 "],
                  [0.7, "#ff9900 "],
                  [1, "#ff3738"],
                ],
              },
            },
            pointer: {
              width: 3,
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: 0,
              length: 0,
              lineStyle: {
                color: "#fff",
                width: 0,
              },
            },
            splitLine: {
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 1,
              },
            },
            axisLabel: {
              color: "#fff",
              distance: 0,
              fontSize: 8,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              color: "auto",
              fontSize: 13,
              fontWeight: "bold",
            },
            data: [
              {
                value: mooe,
              },
            ],
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
      var len = "0";
      if (length > 0 && length < 2) {
        len = 50 - length * 7.1 + "%";
      }
      return len;
    },
  },
};
</script>