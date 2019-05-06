import React from 'react';
import Vis from './Vis';

const App: React.FC = () => {
  return (
    <>
      <h1 style={{ padding: '20px', paddingLeft: '36px', margin: 0 }}>
        The Dashboard
      </h1>
      <div
        style={{
          boxSizing: 'border-box',
          height: '90%',
          display: 'grid',
          padding: '20px',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: '10% 22.5% 22.5% 22.5% 22.5%',
        }}
      >
        <Vis
          size="s"
          mode="value"
          title="Total power usage"
          subtitle="36 unit"
          indicator="normal"
        />
        <Vis
          size="s"
          mode="value"
          title="Estimated power usage"
          subtitle="72 unit/ day"
          indicator="normal"
        />
        <Vis
          size="s"
          mode="value"
          title="Estimated power bill"
          subtitle="26 $/ day"
          indicator="normal"
        />
        <Vis
          size="s"
          mode="value"
          title="Current power usage of house"
          subtitle="Lower than average"
          indicator="normal"
        />
        <Vis
          size="s"
          mode="value"
          title="Current power usage of city"
          subtitle="Higher than average"
          indicator="warning"
        />
        <Vis
          size="s"
          mode="value"
          title="Remainding power"
          subtitle="39 unit"
          indicator="good"
        />
        <Vis style={{ gridColumn: 'span 2' }} />
        <Vis
          title="Power Billing"
          subtitle="Highest in 9:00"
          indicator="normal"
          type="line"
          style={{ gridColumn: 'span 2' }}
        />
        <Vis
          title="Power Usage by device"
          subtitle="Light cost most"
          indicator="normal"
          type="pie"
          style={{ gridColumn: 'span 2' }}
        />
        <Vis
          type="multitpleline"
          size="l"
          title="Power mintor"
          subtitle="120,000 unit/ hour"
          style={{
            gridRow: '3 / 6',
            gridColumn: '1 / 6',
          }}
        />
        <Vis
          type="bar"
          size="row"
          style={{
            gridRow: '3 / 4',
            gridColumn: '6 / 7',
          }}
        />
        <Vis
          type="line"
          size="row"
          style={{
            gridRow: '4 / 5',
            gridColumn: '6 / 7',
          }}
        />
        <Vis
          type="pie"
          size="row"
          style={{
            gridRow: '5 / 6',
            gridColumn: '6 / 7',
          }}
        />
      </div>
    </>
  );
};

export default App;
