import React, {useRef, useEffect, CSSProperties} from "react"
import echarts from "echarts"

type TProps = {
  option: echarts.EChartOption;
  style?: CSSProperties;
}

const Echart: React.FC<TProps> = ({option, style}) => {
  const chart = useRef<HTMLDivElement>(null)
  let myChart: echarts.ECharts

  useEffect(() => {
    myChart = echarts.init(chart.current!)
    myChart.setOption(option)
  }, [])

  useEffect(() => {
    const resize = () => myChart.resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  return <div style={style} ref={chart} />
}

export default Echart
