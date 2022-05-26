<template>
  <div class="bar">
    <div id="bar" ref="bar" class="echart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props: ["dataSource", "name", "units", "title"],
  watch: {
    dataSource(data) {
      this.setEchart(data);
    },
  },
  mounted() {
    try {
      this.setEchart(this.dataSource);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    setEchart(data) {
      if (!data) return;
      let rout = 0;
      if (data.valueList) {
        if (data.valueList.length > 3) {
          rout = 17;
        }
      }
      const nameValueList = data.value.map((item, index) => {
        return {
          value: item,
          name: data.name[index],
        };
      });
      const sortValue = nameValueList.sort((item, nextItem) => {
        return nextItem.value - item.value;
      });

      var fontSize_win = document.body.offsetWidth;
      var myChart = echarts.init(this.$refs.bar);
      var option = {
        title: {
          textStyle: {
            color: "#ffffff",
            fontSize: (fontSize_win / 1920) * 5,
          },
        },
        tooltip: {
          trigger: "axis",
          extraCssText: "z-index:999",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          confine: true,
          backgroundColor: "rgba(0,0,0,0.3)",
          textStyle: {
            // 提示框浮层的文本样式。
            fontSize: (fontSize_win / 1920) * 10,
          },
        },
        grid: {
          top: "0%",
          right: "10%",
          left: "15%",
          bottom: "18%",
        },
        xAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                //x轴颜色
                color: "rgba(99, 142, 160, 1)",
                width: 2,
              },
            },
            axisLabel: {
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: sortValue.map((item) => item.name),
            axisLabel: {
              interval: 0,
              //x轴文字
              margin: 5,
              color: "#fff",
              textStyle: {
                fontSize: (fontSize_win / 1920) * 11,
              },
              rotate: rout,
              formatter: function (value) {
                return value.length > 5 ? value.substring(0, 5) + "..." : value;
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(99, 142, 160, 1)",
                width: 1.5,
              },
            },
          },
        ],
        series: [
          {
            name: this.title,
            type: "bar",
            data: sortValue.map((item) => item.value),
            barWidth: "10px",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: "rgba(2,108,255,1)" },
                { offset: 0, color: "rgba(0,255,246,1)" },
              ]),
              shadowColor: "rgba(0,160,221,0.3)",
              shadowBlur: 3,
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: [" {a|{c}}"].join(""),
                rich: {
                  d: {
                    color: "#3CDDCF",
                  },
                  a: {
                    color: "#fff",
                    align: "center",
                  },
                },
              },
            },
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

      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>






