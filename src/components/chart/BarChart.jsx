import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import { useChart } from './useChart';
import Chart from './chart';
import { Select } from '../select/Select';

export function BarChart({ title, subheader, chart, filter, ...other }) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'string',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} 개`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Box {...other}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardHeader title={title} subheader={subheader} />
        {filter && <Select {...filter} sx={{ padding: '24px 24px 0 0' }} />}
      </Box>
      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={300}
        />
      </Box>
    </Box>
  );
}
