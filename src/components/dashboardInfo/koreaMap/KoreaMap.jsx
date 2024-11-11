import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleSouthKoreaMapChart } from 'react-simple-south-korea-map-chart';
import { Box, Typography } from '@mui/material';

const DUMMY_DATA = [
  { locale: '부산광역시', count: 300 },
  { locale: '대구광역시', count: 90 },
  { locale: '대전광역시', count: 60 },
  { locale: '강원도', count: 20 },
  { locale: '광주광역시', count: 100 },
  { locale: '경기도', count: 800 },
  { locale: '인천광역시', count: 180 },
  { locale: '제주특별자치도', count: 100 },
  { locale: '충청북도', count: 49 },
  { locale: '경상북도', count: 100 },
  { locale: '전라북도', count: 30 },
  { locale: '세종특별자치시', count: 110 },
  { locale: '충청남도', count: 10 },
  { locale: '경상남도', count: 0 },
  { locale: '전라남도', count: 250 },
  { locale: '울산광역시', count: 100 },
  { locale: '서울특별시', count: 1000 },
];

export function KoreaMap() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const setColorByCount = (count) => {
    if (count > 500) return '#43cdb6';
    if (count > 250) return '#61CDBB';
    if (count > 100) return '#79D3C4';
    if (count > 50) return '#91D9CD';
    if (count > 25) return '#A9DFD6';
    if (count > 10) return '#C1E5DF';
    if (count > 5) return '#D9EBE8';
    if (count > 0) return '#ebfffd';
    return '#F1F1F1';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/potholes');
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (

    
    <Box
      sx={{
        width: '100%',
        height: '100%',
        'path:hover': {
          fill: 'black',
          outline: 'none',
        },
      }}
    >
      <Typography variant="h4" sx={{ margin: '10px' }}>
        전국 포트홀 현황
      </Typography>
      <SimpleSouthKoreaMapChart
        setColorByCount={setColorByCount}
        data={DUMMY_DATA}
      />
    </Box>
  );
}
