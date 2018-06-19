import React from 'react';

import { EuiSpacer, EuiXYChart, EuiVerticalBarSeries } from '../../../../src/components';

// eslint-disable-next-line
export class ExampleCrosshair extends React.Component {
  state = {
    crosshairValue: 2,
  };
  _updateCrosshairLocation = crosshairValue => {
    this.setState({ crosshairValue });
  };
  render() {
    return (
      <div>
        <EuiXYChart
          onCrosshairUpdate={this._updateCrosshairLocation}
          crosshairValue={this.state.crosshairValue}
          width={600}
          height={200}
        >
          <EuiVerticalBarSeries
            name="Users"
            data={[{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 5, y: 2 }]}
            color={'#db1374'}
          />
        </EuiXYChart>
        <EuiSpacer size="xl" />
        <EuiXYChart
          onCrosshairUpdate={this._updateCrosshairLocation}
          crosshairValue={this.state.crosshairValue}
          width={600}
          height={200}
        >
          <EuiVerticalBarSeries
            name="Users"
            data={[{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 5, y: 2 }]}
            color={'#db1374'}
          />
        </EuiXYChart>
      </div>
    );
  }
}
