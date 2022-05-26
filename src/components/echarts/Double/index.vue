<template>
  <div class="bar">
    <div class="bar">
      <div id="bar" ref="bar" class="echart"></div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import echarts from "echarts";
export default {
  props: ["dataSource", "name", "units"],
  watch: {
    dataSource: {
      handler(data) {
        if (!data) return;
        this.$nextTick(() => {
          this.setEchart(data);
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    setEchart(dataSource) {
      if (!dataSource || !dataSource.annual_plan) return;
      var fontSize_win = document.body.offsetWidth;
      var myChart = echarts.init(this.$refs.bar);

      const option = {
        baseOption: {
          tooltip: {
            trigger: "axis",
            extraCssText: "z-index:999",
            confine: true,
            backgroundColor: "rgba(0,0,0,0.3)",
            textStyle: {
              // 提示框浮层的文本样式。
              fontSize: (fontSize_win / 1920) * 10,
            },
          },
          grid: {
            top: "15%",
            right: "5%",
            left: "10%",
            bottom: "25%",
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: dataSource.xaxis_value,
              axisLine: {
                lineStyle: {
                  color: "rgba(99, 142, 160, 0.3)",
                },
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: "#fff",
                align: "center",
                margin: 18,
                textStyle: {
                  fontSize: 10,
                },
                rotate: 15,
                 formatter: function (value) {
                return value.length > 6 ? value.substring(0, 6) + "..." : value;
              },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              splitNumber: 5,
              minInterval: 1,
              splitLine: {
                lineStyle: {
                  color: "rgba(99, 142, 160, 0.3)",
                },
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                interval: 0,
                rotate: 0,
                color: "#fff",
                margin: 10,
                textStyle: {
                  fontSize: (fontSize_win / 1920) * 12,
                },
              },
              splitArea: {
                show: false,
              },
            },
          ],
          legend: {
            data:dataSource.legend,
            right: "10%",
            top: "-5px",
            icon: "rect",
            itemWidth: 12, // 设置图例图形的宽
            itemHeight: 2, // 设置图例图形的高
            textStyle: {
              fontSize: (fontSize_win / 1920) * 14,
              color: "#fff",
            },
          },
          series: [
            {
              name: dataSource.legend[0] || '',
              type: "line",
              stack: "Total",
              data: dataSource.annual_plan,
              symbolSize: 8,
              color: "rgba(255, 241, 0, 1)",
              lineStyle: {
                normal: {
                  width: 2,
                },
              },

              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255, 212, 74, 0.1) ",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 241, 0, 0.6)",
                  },
                ]),
              },
              smooth: true,
            },
            {
             name: dataSource.legend[1] || '',
              type: "line",
              data: dataSource.special_plan,
              symbolSize: 8,
              lineStyle: {
                normal: {
                  width: 2,
                },
              },
              color: "rgba(93, 255, 153, 1)",
              areaStyle: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(93, 255, 153, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(93, 255, 153, 0.6)",
                  },
                ]),
              },
              smooth: true,
            },
            // {
            //  name: dataSource.legend[2] || '',
            //   type: "line",
            //   data: dataSource.work_tasks,
            //   symbolSize: 8,
            //   lineStyle: {
            //     normal: {
            //       width: 2,
            //     },
            //   },
            //   color: "rgba(7, 153, 255, 1)",
            //   areaStyle: {
            //     opacity: 1,
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       {
            //         offset: 0,
            //         color: "rgba(7, 153, 255, 0.1)",
            //       },
            //       {
            //         offset: 1,
            //         color: "rgba(7, 153, 255, 0.6)",
            //       },
            //     ]),
            //   },
            //   smooth: true,
            // },
          ],
        },
      };
      //setOption方法
      myChart.setOption(option);

      // var index = 0; //播放所在下标
      // function autoPlay() {
      //   myChart.dispatchAction({
      //     type: "showTip",
      //     seriesIndex: 0,
      //     dataIndex: index,
      //   });
      //   index++;
      //   var dataLength =dataSource.annual_plan.length;
      //   if (index > dataLength) {
      //     index = 0;
      //   }
      // }
      // var times = setInterval(autoPlay, 2000);
      // myChart.on("mouseover", function () {
      //   clearInterval(times);
      // });
      // myChart.on("mouseout", function () {
      //   times = setInterval(autoPlay, 2000);
      // });
      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>