<template>
  <div id="bar" ref="bar" class="bar"></div>
</template>
<style lang="scss">
</style>
<script>
import echarts from "echarts";

export default {
  props: ["dataSource", "name"],
   watch: {
    dataSource: {
      handler(data) {
        if(!data) return;
         try {
        this.setacherts(data);
        } catch (error) {
          console.log(error)
        }
      },
      deep: true,
      immediate:true
    },
  },
  methods: {
    setacherts(mooe) {
      if (!mooe) return;
      var fontSize_win = document.body.offsetWidth;
        var dataStyle = {
        normal: {
          // formatter: () => {
          //   return `{d|${this.name}}`;
          // },
          // rich: {
          //   d: {
          //     color: "#00fff6",
          //     fontSize: 14,
          //     align: "center",
          //     display: "block",
          //     lineHeight: 30,
          //   },
          //   a: {
          //     color: "#00fff6",
          //     align: "center",
          //     fontSize: 20,
          //     fontWeight: 700,
          //   },
          // },
          // position: "center",
          show: false,
          // textStyle: {
          //   fontSize: (fontSize_win / 1920) * 18,
          //   fontWeight: "normal",
          //   color: "#fff",
          // },
        },
      };
      var myChart = echarts.init(this.$refs.bar);
      var option = {
        animationDuration: 3000,
        title: {},
        tooltip: {
          extraCssText: "z-index:999",
          confine: true,
          backgroundColor: "rgba(0,0,0,0.3)",
          textStyle: {
            // 提示框浮层的文本样式。
            fontSize: (fontSize_win / 1920) * 10,
          },
        },
        legend: [
          {
            left: "58%",
            bottom: this.setlegendHeight(mooe.name.length),
            orient: "vertical",
            align: "left",
            x: "left",
            itemWidth: 8,
            itemHeight: 8,
            itemGap:10, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
            formatter: function (name) {
              return "{x|" + name + "}";
            },
            data: mooe.nameList,
            textStyle: {
              rich: {
                x: {
                  fontSize: (fontSize_win / 1920) * 11,
                    color: "#fff",
                },
              },
            },
          },
        ],
        toolbox: {},
        calculable: true,
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["30%", "52%"],
            hoverOffset:5,
            // roseType: "radius",
            label: dataStyle,
            labelLine: {
              normal: {
                show: false,
                length: 10,
                length2: 10,
              },
              emphasis: {
                show: true,
              },
            },
            color: [
              "rgba(255, 234, 0, 1)",
              "rgba(195, 130, 255, 1)",
              "rgba(110, 255, 104, 1)",
              "rgba(82, 114, 255, 1)",
              "rgba(255, 111, 111, 1)",
              "rgba(0, 255, 246, 1)",
            ],
            data: mooe.value.map((item, index) => {
              return {
                name: mooe.name[index],
                value: item,
              };
            }),
          },
        ],
      };
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      this.chartAuto(option, myChart);
    },

    chartAuto(option, myChart) {
      let isSet = true;
      var charPie3currentIndex = 0;
      var startCharts = null;
      myChart.on("mouseover", (param) => {
        isSet = false;
        clearInterval(startCharts);
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        });
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: param.dataIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: param.dataIndex,
        });
        charPie3currentIndex = param.dataIndex;
      });

      myChart.on("mouseout", function () {
        if (!isSet) {
          startCharts = setInterval(chartHover, 2000);
          isSet = true;
        }
      });

      const chartHover = () => {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        });
        charPie3currentIndex = (charPie3currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: charPie3currentIndex,
        });
      };

      startCharts = setInterval(chartHover, 2000);
    },
    setlegendHeight(length) {
      // 7
      var len = "0%";
      if(length>0 && length<4){
        len = 40 -(length * 7.1)+ '%'
      }
      return len;
    },
  },
};
</script>