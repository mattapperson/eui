import React from 'react';

import { EuiXYChart, EuiHorizontalBarSeries, EuiXYChartUtils } from '../../../../src/components';

const data = [
  { x: 3, y: 'A' },
  { x: 1, y: 'B' },
  { x: 5, y: 'C' },
  { x: 2, y: 'D' },
  { x: 1, y: 'E' },
];
export default () => (
  <EuiXYChart
    width={600}
    height={200}
    yType="ordinal"
    orientation={EuiXYChartUtils.ORIENTATION.HORIZONTAL}
  >
    <EuiHorizontalBarSeries name="Tag counts" data={data} />
  </EuiXYChart>
);
