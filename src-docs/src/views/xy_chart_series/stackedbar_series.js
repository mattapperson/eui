import React from 'react';

import { EuiXYChart, EuiBar } from '../../../../src/components';

export default () => (
  <EuiXYChart
    width={600}
    height={200}
    stackBy="y"
  >
    <EuiBar name="Users" data={[{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]} />
    <EuiBar name="Users" data={[{ x: 0, y: 2 }, { x: 1, y: 4 }, { x: 2, y: 1 }, { x: 4, y: 1 }]} />
  </EuiXYChart>
);
