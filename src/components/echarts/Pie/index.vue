<template>
  <div id="bar" ref="bar" class="bar"></div>
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
          show: false,
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
            left: "63%",
            bottom: "15%",
            orient: "vertical",
            align: "left",
            x: "left",
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 12, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
            formatter: function (name) {
              return "{x|" + name + "}";
            },
            data: mooe.name,
            textStyle: {
              rich: {
                x: {
                  color:'#fff',
                  fontSize: (fontSize_win / 1920) * 12,
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
            center: ["30%", "55%"],
            hoverOffset:5,
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
              "rgba(0, 160, 233, 1)",
              "rgba(236, 105, 65, 1)",
              "rgba(0, 255, 0, 1)",
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
  },
};
</script>