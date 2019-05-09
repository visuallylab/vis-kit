import React, { CSSProperties } from 'react';
import { titleStyle, subtitleStyle, indicatorStyle } from './style';
import Echart from './Echart';
import {
  barOption,
  lineOption,
  pieOption,
  multiplelineOption,
} from './Options';

interface IProps {
  size?: 's' | 'm' | 'l' | 'row';
  type?: 'bar' | 'pie' | 'line' | 'multitpleline';
  mode?: 'chart' | 'value';
  title?: string;
  subtitle?: string;
  indicator?: string;
  style?: CSSProperties;
}

const Vis: React.FunctionComponent<IProps> = ({
  title = 'Energy status',
  subtitle = 'subtitle',
  indicator = 'indicator',
  size = 'm',
  mode = 'chart',
  type = 'bar',
  style = {},
}) => {
  const titleStyles =
    mode === 'chart'
      ? titleStyle[size]
      : {
          fontSize: '10px',
          margin: 0,
          marginTop: '4px',
        };
  const subtitleStyles =
    mode === 'chart'
      ? subtitleStyle[size]
      : {
          fontSize: '20px',
          marginTop: '0px',
        };
  const indicatorStyles =
    mode === 'chart'
      ? indicatorStyle[size]
      : {
          marginTop: '4px',
          display: 'none',
        };
  let option;

  switch (type) {
    case 'bar':
      option = barOption;
      break;
    case 'line':
      option = lineOption;
      break;
    case 'pie':
      option = pieOption;
      break;
    case 'multitpleline':
      option = multiplelineOption;
      break;
    default:
      option = {};
      break;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        boxShadow: '#0000000f 2px 2px 10px 5px',
        borderRadius: 20,
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ position: 'relative', left: 20, textAlign: 'left' }}>
        <h1 style={titleStyles}>{title}</h1>
        <h2 style={subtitleStyles}>{subtitle}</h2>
      </div>
      <div style={{ position: 'absolute', right: 20, top: 0 }}>
        <p style={indicatorStyles}>{indicator}</p>
      </div>
      <div style={{ flex: 1 }}>
        {mode === 'chart' && <Echart option={option} />}
      </div>
    </div>
  );
};

export default Vis;
