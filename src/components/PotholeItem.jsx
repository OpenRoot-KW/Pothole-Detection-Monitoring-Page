// @ts-check
import { Card } from '@mui/material';
import React from 'react';

/**
 * @param pothole {PotholeInfo}
 */
export const PotholeItem = ({ pothole }) => (
  <Card
    sx={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '10px',
    }}
  >
    <img
      src={pothole.image}
      width={100}
      height={100}
      alt={`Pothole at ${pothole.location}`}
      style={{ marginRight: '20px', borderRadius: '10px' }}
    />
    <div>
      <p style={{ lineHeight: 1.2, margin: '5px 0' }}>
        <strong>위치:</strong> {pothole.location}
      </p>
      <p style={{ lineHeight: 1.2, margin: '5px 0' }}>
        <strong>등록일자:</strong>{' '}
        {pothole.registeredAt.toISOString().split('T')[0]}
      </p>
      <p style={{ lineHeight: 1.2, margin: '5px 0' }}>
        <strong>상태:</strong> {pothole.isRepairedStatusLabel()}
      </p>
    </div>
  </Card>
);
