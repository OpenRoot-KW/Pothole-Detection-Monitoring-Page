import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

function PotholeOverview() {
  const [status, setStatus] = useState({
    totalPotholes: 0,
    fixedPotholes: 0,
    unfixedPotholes: 0,
  });

  useEffect(() => {
    axios
      .get('/potholes/status')
      .then((res) => res.data)
      .then((data) => {
        setStatus(data);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ margin: '10px' }}>
        포트홀 전체현황
      </Typography>
      <div>
        <Paper sx={{ margin: '10px', padding: '20px' }}>
          <Typography variant="h6">{status.fixedPotholes}</Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            수리완료
          </Typography>
        </Paper>
        <Paper sx={{ margin: '10px', padding: '20px' }}>
          <Typography variant="h6">{status.unfixedPotholes}</Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            미수리
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default PotholeOverview;
