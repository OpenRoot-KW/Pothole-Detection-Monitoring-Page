import { BarChart } from '../../components/chart/BarChart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getMonthEnValues, getMonthLabels } from '../../data/months';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';

const sidoList = [
  { label: '서울', value: 'seoul' },
  { label: '부산', value: 'busan' },
  { label: '인천', value: 'incheon' },
];

const DUMMY_DATA = {
  seoul: {
    종로구: 3,
    중구: 2,
    용산구: 4,
    성동구: 6,
    광진구: 8,
  },
  busan: {
    해운대구: 5,
    수영구: 7,
    남구: 8,
    동래구: 4,
    북구: 6,
  },
  incheon: {
    중구: 3,
    동구: 2,
    미추홀구: 3,
    연수구: 7,
    남동구: 5,
  },
};

export const Statistics = () => {
  const [sido, setSido] = useState('seoul');

  const [monthlyPotholes, setMonthlyPotholes] = useState({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  });

  useEffect(() => {
    axios
      .get('/potholes/statistics/monthly')
      .then((res) => res.data)
      .then((data) => setMonthlyPotholes(data));
  }, []);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Card sx={{ width: '80%', marginTop: '20px', marginBottom: '20px' }}>
        <BarChart
          title="포트홀 발생 빈도수 (시/군/구)"
          subheader=""
          chart={{
            labels: Object.keys(DUMMY_DATA[sido]),
            series: [
              {
                name: '포트홀',
                type: 'column',
                fill: 'solid',
                data: Object.values(DUMMY_DATA[sido]),
              },
            ],
          }}
          filter={{
            title: '시/도 선택',
            options: sidoList,
            value: sido,
            onChange: (sido) => setSido(sido),
          }}
        />
      </Card>
      <Card sx={{ width: '80%', marginTop: '20px', marginBottom: '20px' }}>
        <BarChart
          title="포트홀 발생 빈도수 (월별)"
          subheader=""
          chart={{
            labels: getMonthLabels(),
            series: [
              {
                name: '포트홀',
                type: 'area',
                fill: 'gradient',
                data: getMonthEnValues().map((month) => monthlyPotholes[month]),
              },
            ],
          }}
        />
      </Card>
    </Box>
  );
};
