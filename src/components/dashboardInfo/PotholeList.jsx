import React, { useState } from 'react';
import './PotholeList.css';
import { PotholeInfo } from '../../model/PotholeInfo';
import { PotholeItem } from '../PotholeItem';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import axios from 'axios';
import { useInfiniteScrollAndFetch } from '../../hooks/useInfiniteScrollAndFetch';

const PotholeList = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    refetch();
  };

  const fetchData = async (page) =>
    axios
      .get('/potholes', {
        params: {
          page,
          fixed: filter !== 'all' ? filter === 'repaired' : null,
        },
      })
      .then((res) => res.data)
      .then(({ potholes, totalPage }) => {
        return {
          data: potholes.map(
            (pothole) =>
              new PotholeInfo(
                pothole.potholeId,
                pothole.imageUrl,
                pothole.regionName,
                new Date(pothole.createdAt),
                pothole.isFixed,
                pothole.sido,
                pothole.sigungu,
                pothole.latitude,
                pothole.longitude,
                pothole.isVaild,
                pothole.isAiVerified
              )
          ),
          totalPage,
        };
      });

  const { page, data, endScrollRef, totalPage, refetch } =
    useInfiniteScrollAndFetch(fetchData, [filter]);

  return (
    <div className="PotholeList">
      <FormControl
        sx={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RadioGroup row onChange={handleFilterChange}>
          <FormControlLabel value="all" control={<Radio />} label="전체" />
          <FormControlLabel
            value="repaired"
            control={<Radio />}
            label="수리완료"
          />
          <FormControlLabel
            value="unrepaired"
            control={<Radio />}
            label="미수리"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ height: '80vh', overflow: 'auto' }}>
        {data.map((pothole) => (
          <PotholeItem key={pothole.id} pothole={pothole} />
        ))}
        {page < totalPage && <div ref={endScrollRef}>loading...</div>}
      </div>
    </div>
  );
};

export default PotholeList;
