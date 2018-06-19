import React from 'react';

import { EuiXYChart, EuiArea } from '../../../../src/components';

const DATA_A = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 5, y: 2 }];

export default () => (
  <EuiXYChart width={600} height={200}>
    <EuiArea name="Users" data={DATA_A} />
  </EuiXYChart>
);
