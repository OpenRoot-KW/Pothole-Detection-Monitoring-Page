import React from 'react';
import './dashboardInfo.css';
import PotholeOverview from '../../components/dashboardInfo/PotholeOverview';
import WeatherInfo from '../../components/dashboardInfo/WeatherInfo';
import { KoreaMap } from '../../components/dashboardInfo/koreaMap/KoreaMap';
import PotholeList from '../../components/dashboardInfo/PotholeList';
import { Box } from '@mui/material';

function DashboardInfo() {
  return (
    <Box className="dashboard-page" sx={{ padding: '20px 40px 0 40px' }}>
      <div className="left-partition">
        <div className="top-left-partition">
          <PotholeOverview />
        </div>
        <div className="middle-left-partition">
          <WeatherInfo />
        </div>
        <div className="bottom-left-partition"></div>
      </div>
      <div className="middle-partition">
        <KoreaMap />
      </div>
      <div className="right-partition">
        <PotholeList />
      </div>
    </Box>
  );
}

export default DashboardInfo;
