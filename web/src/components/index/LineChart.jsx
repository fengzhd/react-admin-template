import React, { Component } from 'react'
import echarts from 'echarts'
export class LineChart extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    this.initChart(this.props.data)
  }
  initChart(item) {
    var myChart = echarts.init(document.getElementById('main'));
    const option = {
      backgroundColor: '#080b30',
      title: {
        textStyle: {
          align: 'center',
          color: '#fff',
          fontSize: 20,
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              }, {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)',
              }, {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }],
              global: false
            }
          },
        },
      },
      grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
      },
      xAxis: [{
        type: 'category',
        axisLine: {
          show: true
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00'
          },
        },
        axisLabel: {
          color: '#fff'
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],

      }],
      yAxis: [{
        type: 'value',
        min: 0,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          margin: 20,
          textStyle: {
            color: '#d1e6eb',

          },
        },
        axisTick: {
          show: false,
        },
      }],
      series: {
        name: item.title,
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 25,
        lineStyle: {
          normal: {
            color: item.color,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: item.color,
          }
        },
        itemStyle: {
          color: item.color,
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: false
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: item.color
            },
            {
              offset: 1,
              color: 'rgba(0, 0, 0, 0)'
            }
            ], false),
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 20
          }
        },
        data: item.data
      }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  shouldComponentUpdate(nextProps) {
    this.initChart(nextProps.data)
    return false
  }
  render() {
    return (
      <div id="main" className="h-500" style={{ width: 'calc(100vw - 220px)' }}>
        {this.props.data.title}
      </div>
    )
  }
}

export default LineChart
