import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';

/**
 * @param pothole {PotholeInfo}
 * @param onItemClick
 * @param firstButtonLabel {string}
 * @param secondButtonLabel {string}
 * @param onButtonClick
 */
export function PotholeProcessItem({
  pothole,
  onItemClick,
  firstButtonLabel,
  secondButtonLabel,
  onButtonClick,
}) {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px 10px 20px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
      onClick={() => onItemClick(pothole)}
    >
      <div>
        <p style={{ lineHeight: 1.2, margin: '5px 0' }}>
          <strong>위치:</strong> {pothole.location}
        </p>
        <p style={{ lineHeight: 1.2, margin: '5px 0' }}>
          <strong>등록일자:</strong>{' '}
          {pothole.registeredAt.toISOString().split('T')[0]}
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: '5px' }}
          onClick={() => onButtonClick(pothole.id, true)}
        >
          {firstButtonLabel}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: '5px' }}
          onClick={() => onButtonClick(pothole.id, false)}
        >
          {secondButtonLabel}
        </Button>
      </div>
    </Card>
  );
}
