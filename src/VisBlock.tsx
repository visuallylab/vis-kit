import React  from "react"
import {Size, titleStyle, subtitleStyle, indicatorStyle} from "./style"
import Echart from "./Echart"
import echarts from "echarts"

interface IProps {
  size?: "s" | "m" | "l" | "row"
  type?: "bar" | "pie" | "line"
  title?: string
  subtitle?: string
  indicator?: string
}

const VisBlock: React.FunctionComponent<IProps> = ({
  title = "Energy status",
  subtitle = "subtitle",
  indicator = "indicator",
  size = "m",
  type = "bar"
}) => {
  const data = [
    {value: 5, name: "shirt"},
    {value: 20, name: "cardign"},
    {value: 36, name: "chiffon shirt"},
    {value: 10, name: "pants"},
    {value: 10, name: "heels"}
  ]
  const lineStyle =
    type === "line"
      ? {
          smooth: true,
          symbol: "none",
          sampling: "average",
          itemStyle: {
            color: "rgb(255, 70, 131)"
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(255, 158, 68, 1)"
              },
              {
                offset: 0.8,
                color: "rgba(255, 70, 131, 0)"
              }
            ])
          }
        }
      : {}

  const barStyle =
    type === "bar"
      ? {
          barWidth: 12,
          itemStyle: {
            barBorderRadius: [25, 25, 0, 0]
          }
        }
      : {}
  const xAxisTicks =
    type !== "pie"
      ? ["shirt", "cardign", "chiffon shirt", "pants", "heels"]
      : []
  const option = {
    xAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: xAxisTicks
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type,
        data,
        ...barStyle,
        ...lineStyle
      }
    ]
  }

  return (
    <div
      style={{
        ...Size[size],
        boxShadow: "#0000000f 2px 2px 10px 5px",
        borderRadius: 20,
        position: "relative"
      }}
    >
      <div style={{position: "absolute", left: 20, textAlign: "left"}}>
        <h1 style={titleStyle[size]}>{title}</h1>
        <h2 style={subtitleStyle[size]}>{subtitle}</h2>
      </div>
      <div style={{position: "absolute", right: 20}}>
        <p style={indicatorStyle[size]}>{indicator}</p>
      </div>
      <Echart
        style={{
          height: "90%",
          width: "100%"
        }}
        option={option}
      />
    </div>
  )
}

export default VisBlock
