import React from 'react';
import { GuideSectionTypes } from '../../components';
import { EuiCode } from '../../../../src/components';
import ComplexChartExampleCode from './complex';
import EmptyExampleCode from './empty';
import MultiAxisChartExampleCode from './multi_axis';
import { ExampleCrosshair } from './crosshair_sync';

export const XYChartExample = {
  title: 'General',
  sections: [
    {
      title: 'Complex example',
      text: (
        <div>
          <p>
            Use <EuiCode>EuiXYChart</EuiCode> to display line, bar, area, and stream charts. Note
            that charts are composed with <EuiCode>EuiLineSeries</EuiCode>, <EuiCode>EuiAreaSeries</EuiCode>,{' '}
            <EuiCode>EuiBar</EuiCode>, and <EuiCode>EuiStream</EuiCode> being child components.
          </p>
        </div>
      ),
      source: [
        {
          type: GuideSectionTypes.JS,
          code: require('!!raw-loader!./complex'),
        },
        {
          type: GuideSectionTypes.HTML,
          code: 'This component can only be used from React',
        },
      ],
      demo: (
        <div style={{ margin: 60 }}>
          <ComplexChartExampleCode />
        </div>
      ),
    },
    {
      title: 'Empty Chart',
      text: (
        <div>
          <p>When no data is provided to EuiXYChart, an empty state is displayed</p>
        </div>
      ),
      source: [
        {
          type: GuideSectionTypes.JS,
          code: require('!!raw-loader!./empty'),
        },
        {
          type: GuideSectionTypes.HTML,
          code: 'This component can only be used from React',
        },
      ],
      demo: (
        <div style={{ margin: 60 }}>
          <EmptyExampleCode />
        </div>
      ),
    },
    {
      title: 'Keep cross-hair in sync',
      text: (
        <div>
          <p>
            When displayed side-by-side with other charts, we need to be able to keep them in sync
          </p>
        </div>
      ),
      source: [
        {
          type: GuideSectionTypes.JS,
          code: require('!!raw-loader!./crosshair_sync'),
        },
        {
          type: GuideSectionTypes.HTML,
          code: 'This component can only be used from React',
        },
      ],
      demo: (
        <div style={{ margin: 60 }}>
          <ExampleCrosshair />
        </div>
      ),
    },
    {
      title: 'Multi Axis',
      text: (
        <div>
          <p>If just displaying values is enough, then you can let the chart auto label axis</p>
        </div>
      ),
      source: [
        {
          type: GuideSectionTypes.JS,
          code: require('!!raw-loader!./multi_axis'),
        },
        {
          type: GuideSectionTypes.HTML,
          code: 'This component can only be used from React',
        },
      ],
      demo: (
        <div style={{ margin: 60 }}>
          <MultiAxisChartExampleCode />
        </div>
      ),
    },
  ],
};