<template>
  <div class="bar">
    <div id="bar" ref="bar" class="echart"></div>
  </div>
</template>
<script>
import moment from "moment";
import echarts from "echarts";
export default {
  props: ["dataSource"],
  watch: {
    dataSource: {
      handler(data) {
        if (!data) return;
        try {
          this.setEchart(data);
        } catch (error) {
          console.log(error);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    setEchart(data) {
      if (!data || !data.start_value) return;
      let rout = 0;
      if (data.start_value) {
        if (data.start_value > 5) {
          rout = 30;
        }
      }
      var fontSize_win = document.body.offsetWidth;
      var myChart = echarts.init(this.$refs.bar);
      var option = {
        tooltip: {
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },

          extraCssText: "z-index:999",
          confine: true,
          backgroundColor: "rgba(0,0,0,0.3)",
          textStyle: {
            // 提示框浮层的文本样式。
            fontSize: (fontSize_win / 1920) * 10,
          },
        },
        grid: {
          top: "13%",
          right: "0%",
          left: "10%",
          bottom: "18%",
        },
        legend: {
          data: data.legend,
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
        xAxis: [
          {
            axisTick: {
              show: false,
            },
            data: data.xaxis_value.map((item) => moment(item).format("MM-DD")),
            axisLine: {
              lineStyle: {
                //x轴颜色
                color: "rgba(255,255,255,0.12)",
              },
            },
            axisLabel: {
              interval: 0,
              //x轴文字
              color: "#fff",
              textStyle: {
                fontSize: (fontSize_win / 1920) * 12,
              },
              rotate: rout,
              formatter: function (value) {
                return value.length > 5 ? value.substring(0, 6) + "..." : value;
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              color: "#fff",
            },
            minInterval: 1,
            axisLine: {
              show: false,
            },
            splitLine: {
              //网格线
              lineStyle: {
                color: "#3f4a6b",
              },
            },
          },
        ],
        series: [
          {
            name: data.legend[0],
            type: "bar",
            data: data.start_value.map((item) => item),
            barWidth: "16px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#4729FB", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#3077F7", // 50% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#1FB0F4", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              show: false, // 柱子顶部的数值
            },
          },
          {
            name: data.legend[0],
            type: "bar",
            tooltip: {
              show: false,
            },
            barWidth: 4,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#235DFF", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#59ACF7", // 50% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#71CAFF", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            barGap: "0",
            data: data.start_value.map((item) => item),
          },
          {
            name: data.legend[0],
            tooltip: {
              show: false,
            },
            barGap: "50%",
            type: "pictorialBar",
            itemStyle: {
              borderColor: "#47A6FF",
              color: "#1AC0F4",
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
            symbolSize: ["18.5", "3"],
            symbolOffset: ["-10", "-1.5"], // 左右 ，上下
            symbolRotate: 0,
            symbolPosition: "end",
            data: data.start_value.map((item) => item),
          },
          {
            name: data.legend[1],
            type: "bar",
            data: data.end_value.map((item) => item),
            barWidth: "16px",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#ff9900 ", // 0% 处的颜色
                    },
                    // {
                    //   offset: 0.5,
                    //   color: "#3077F7", // 50% 处的颜色
                    // },
                    {
                      offset: 1,
                      color: "#ffcc00", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              show: false, // 柱子顶部的数值
            },
          },
          {
            name: data.legend[1],
            type: "bar",
            tooltip: {
              show: false,
            },
            barWidth: 4,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#ffab2e", // 0% 处的颜色
                    },
                    // {
                    //   offset: 0.5,
                    //   color: "#59ACF7", // 50% 处的颜色
                    // },
                    {
                      offset: 1,
                      color: "#ffec4c", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            barGap: "0",
            data: data.end_value.map((item) => item),
          },
          {
            name: data.legend[1],
            tooltip: {
              show: false,
            },
            type: "pictorialBar",
            itemStyle: {
              borderColor: "#fff07c",
              color: "#fff07c",
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
            symbolSize: ["18.5", "3"],
            symbolOffset: ["10", "-1.5"], // 左右 ，上下
            symbolRotate: 0,
            symbolPosition: "end",
            data: data.end_value.map((item) => item),
          },
        ],
      };
      myChart.setOption(option, true);
      // var index = 0; //播放所在下标
      // function autoPlay() {
      //   myChart.dispatchAction({
      //     type: "showTip",
      //     seriesIndex: 0,
      //     dataIndex: index,
      //   });
      //   index++;
      //   var dataLength = option.series[0].data.length;
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

      myChart.on("legendselectchanged", function (params) {
        console.log(params);
      });

      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>






