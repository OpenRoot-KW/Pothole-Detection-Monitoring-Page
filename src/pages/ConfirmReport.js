import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';

const ConfirmReport = () => {
  const [reports, setReports] = useState([]);

  const styles = {
    image: {
      marginRight: '20px',
      borderRadius: '5px',
      width: '150px',
      height: '150px',
    },
    location: {
      marginBottom: '5px',
      fontWeight: 'bold',
      fontSize: '20px',
    },
  };

  useEffect(() => {
    axios
      .get('/managements/reports/my')
      .then((res) => res.data)
      .then((data) => {
        setReports(data);
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      {reports.map((report) => (
        <Card sx={{ display: 'flex', padding: '20px' }} key={report.reportId}>
          <img src={report.imageUrl} alt="image" style={styles.image} />
          <div>
            <div style={styles.location}>{report.location}</div>
            <div style={{ color: '#555' }}>
              {new Date(report.createAt).toISOString().split('T')[0]}
            </div>
            <div>{report.content}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ConfirmReport;
