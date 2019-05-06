import React from "react"
import VisBlock from "./VisBlock"

const App: React.FC = () => {
  return (
    <div className="App">
      <VisBlock type="line" size="s" />
      <VisBlock type="bar" size="s" />
      <VisBlock type="line" size="s" />
      <VisBlock type="pie" size="s" />
      <VisBlock type="bar" />
      <VisBlock type="line" />
      <VisBlock type="pie" />
      <VisBlock
        type="line"
        size="l"
        title="Total power"
        subtitle="120,000,000 unit/unit"
      />
      <div style={{display: "inline-block", width: "calc(20% - 40px)"}}>
        <VisBlock type="line" size="row" />
        <VisBlock type="line" size="row" />
        <VisBlock type="line" size="row" />
      </div>
    </div>
  )
}

export default App
