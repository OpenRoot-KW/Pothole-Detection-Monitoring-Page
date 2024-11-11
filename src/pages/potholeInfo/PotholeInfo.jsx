import React, { useState } from 'react';
import { GoogleMarkerMap } from '../../components/googleMap/GoogleMarkerMap';
import './PotholeInfo.css';
import { PotholeItem } from '../../components/PotholeItem';
import { PotholeInfo as PotholeInfoModel } from '../../model/PotholeInfo';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Select } from '../../components/select/Select';
import { getSigunguOptions, SIDO_DATA } from '../../data/locationData';
import axios from 'axios';
import { useInfiniteScrollAndFetch } from '../../hooks/useInfiniteScrollAndFetch';

const PotholeInfo = () => {
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSidoChange = (sido) => {
    setSido(sido);
    setSigungu('');
  };

  const handleSigunguChange = (sigungu) => {
    setSigungu(sigungu);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
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
              new PotholeInfoModel(
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

  const { page, data, endScrollRef, totalPage } = useInfiniteScrollAndFetch(
    fetchData,
    [filter]
  );

  const markers = data.map((pothole) => ({
    lat: pothole.latitude,
    lng: pothole.longitude,
    label: pothole.regionName,
  }));

  return (
    <div className="PotholeMap">
      <div className="info-top-partition">
        <Select
          title="시/도:"
          options={[{ label: '선택하세요', value: '' }, ...SIDO_DATA]}
          value={sido}
          onChange={handleSidoChange}
        />
        <Select
          title="시/군/구:"
          options={[
            { label: '선택하세요', value: '' },
            ...getSigunguOptions(sido),
          ]}
          value={sigungu}
          onChange={handleSigunguChange}
        />
      </div>
      <div className="info-bottom-partition">
        <div className="info-left-partition">
          <div className="google-map">
            <GoogleMarkerMap
              mapStyles={{ width: '100%', height: '100%' }}
              zoom={13}
              center={{ lat: 37.5665, lng: 126.978 }}
              markers={markers}
            />
          </div>
        </div>
        <div className="info-right-partition">
          <FormControl
            className="asdfadsf"
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
          <div
            className="pothole-list"
            style={{ height: '80vh', overflow: 'auto' }}
          >
            {data.map((pothole) => (
              <PotholeItem pothole={pothole} key={pothole.id} />
            ))}
            {page < totalPage && <div ref={endScrollRef}>loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotholeInfo;
