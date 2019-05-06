import echarts from 'echarts';

export const data = [
  { value: 5, name: 'Freezer' },
  { value: 20, name: 'TV' },
  { value: 36, name: 'Light' },
  { value: 10, name: 'Computer' },
  { value: 10, name: 'Hair dryer' },
];

export const barOption = {
  grid: {
    top: 0,
  },
  xAxis: {
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    data: ['07:00', '08:00', '09:00', '10:00', '11:00'],
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'bar',
      data,
      barWidth: 12,
      itemStyle: {
        barBorderRadius: [25, 25, 0, 0],
      },
    },
  ],
};

export const pieOption = {
  grid: {
    top: 0,
  },
  xAxis: {
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'pie',
      data,
      radius: [0, '50%'],
    },
  ],
};

export const lineOption = {
  grid: {
    top: 0,
  },
  xAxis: {
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    data: ['07:00', '08:00', '09:00', '10:00', '11:00'],
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'line',
      data,
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: 'rgb(255, 70, 131)',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(25,25,200, 1)',
          },
          {
            offset: 0.8,
            color: 'rgba(255, 70, 131, 0)',
          },
        ]),
      },
    },
  ],
};

export const multiplelineOption = {
  xAxis: {
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    data: ['07:00', '08:00', '09:00', '10:00', '11:00'],
  },
  yAxis: {
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  series: [
    {
      type: 'line',
      data: [10, 24, 31, 20],
      symbol: 'none',
      markPoint: {
        data: [
          {
            symbol: 'circle',
            symbolSize: 20,
            coord: ['10:00', 20],
          },
        ],
      },
      markLine: {
        label: {
          formatter: () => 'now',
        },
        data: [
          {
            xAxis: '10:00',
          },
        ],
      },
    },
    {
      type: 'line',
      data: [51, 30, 50, 25],
      symbol: 'none',
      markPoint: {
        data: [
          {
            symbol: 'circle',
            symbolSize: 20,
            coord: ['10:00', 25],
          },
        ],
      },
    },
    {
      type: 'line',
      data: [null, null, null, 25, 60],
      lineStyle: {
        type: 'dotted',
      },
      symbol: 'none',
    },
    {
      type: 'line',
      data: [null, null, null, 20, 47],
      lineStyle: {
        type: 'dotted',
      },
      symbol: 'none',
    },
    {
      type: 'line',
      data: [30, 27, 61, 40],
      symbol: 'none',
      markPoint: {
        data: [
          {
            symbol: 'circle',
            symbolSize: 20,
            coord: ['10:00', 40],
          },
        ],
      },
    },
    {
      type: 'line',
      data: [null, null, null, 40, 52],
      lineStyle: {
        type: 'dotted',
      },
      symbol: 'none',
    },
  ],
};
