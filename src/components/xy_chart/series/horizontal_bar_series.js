import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalBarSeries } from 'react-vis';
import { VISUALIZATION_COLORS } from '../../../services';

export class EuiHorizontalBarSeries extends HorizontalBarSeries {
  render() {
    const { name, data, color, onClick, ...rest } = this.props;

    return (
      <g>
        <HorizontalBarSeries
          key={name}
          onSeriesClick={onClick}
          color={color}
          style={{
            strokeWidth: 1,
            stroke: 'white',
            rx: 2,
            ry: 2,
          }}
          data={data}
          {...rest}
        />
      </g>
    );
  }
}

EuiHorizontalBarSeries.displayName = 'EuiHorizontalBarSeries';

EuiHorizontalBarSeries.propTypes = {
  /** The name used to define the data in tooltips and ledgends */
  name: PropTypes.string.isRequired,
  /** Array<{x: number, y: string|number}> */
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  })).isRequired,
  /** An EUI visualization color, the default value is enforced by EuiXYChart */
  color: PropTypes.oneOf(VISUALIZATION_COLORS),
  onClick: PropTypes.func
};

EuiHorizontalBarSeries.defaultProps = {};