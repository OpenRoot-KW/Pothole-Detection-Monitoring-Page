import React, { useState } from 'react';
import { GoogleMarkerMap } from '../../components/googleMap/GoogleMarkerMap';
import { PotholeInfo } from '../../model/PotholeInfo';
import { Select } from '../../components/select/Select';
import { Box } from '@mui/material';
import { PotholeProcessItem } from '../../components/PotholeProcessItem';
import { getSigunguOptions, SIDO_DATA } from '../../data/locationData';
import axios from 'axios';
import { useInfiniteScrollAndFetch } from '../../hooks/useInfiniteScrollAndFetch';

const PotholeProcessList = () => {
  const [sido, setSido] = useState('');
  const [sigungu, setSigungu] = useState('');
  const [selectedPothole, setSelectedPothole] = useState(null);

  const fetchPotholes = async (page) => {
    const response = await axios.get('/managements/potholes', {
      params: { page, sido, sigungu },
    });

    return {
      data: response.data.potholes.map(
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
      totalPage: response.data.totalPage,
    };
  };

  const handleSidoChange = (sido) => {
    setSido(sido);
    setSigungu('');
  };

  const handlePotholeClick = (pothole) => {
    setSelectedPothole(pothole);
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`/managements/potholes/${id}`);
      refetch();
    } catch (error) {
      console.error('Failed to update pothole status:', error);
    }
  };

  const { data, page, endScrollRef, totalPage, refetch } =
    useInfiniteScrollAndFetch(fetchPotholes, [sido, sigungu]);

  return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 66px)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '30%',
          padding: '20px',
          backgroundColor: '#f1f1f1',
          borderRight: '1px solid #ccc',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Select
            title="시/도:"
            options={[{ label: '선택하세요', value: '' }, ...SIDO_DATA]}
            value={sido}
            onChange={handleSidoChange}
            sx={{
              border: '1px solid #ccc',
              backgroundColor: 'white',
              borderRadius: '8px',
              marginRight: '10px',
            }}
          />
          <Select
            title="시/군/구:"
            options={[
              { label: '선택하세요', value: '' },
              ...getSigunguOptions(sido),
            ]}
            value={sigungu}
            onChange={setSigungu}
            sx={{
              border: '1px solid #ccc',
              backgroundColor: 'white',
              borderRadius: '8px',
            }}
          />
        </Box>
        <div style={{ height: '70vh', overflow: 'auto' }}>
          {data.map((pothole) => (
            <PotholeProcessItem
              key={pothole.id}
              pothole={pothole}
              onItemClick={handlePotholeClick}
              firstButtonLabel="수리 승인"
              secondButtonLabel="수리 반려"
              onButtonClick={(status) => handleStatusChange(pothole.id, status)} // 아직 안넣음
            />
          ))}
          {page < totalPage && <div ref={endScrollRef}>loading...</div>}
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          backgroundColor: '#f1f1f1',
        }}
      >
        <Box
          sx={{
            marginBottom: '20px',
            height: '50%',
            backgroundColor: '#f1f1f1',
          }}
        >
          {selectedPothole && (
            <GoogleMarkerMap
              mapStyles={{ width: '100%', height: '100%' }}
              zoom={13}
              center={{
                lat: selectedPothole.latitude,
                lng: selectedPothole.longitude,
              }}
              markers={data.map((p) => ({
                lat: p.latitude,
                lng: p.longitude,
                label: p.location,
              }))}
            />
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '45%',
            backgroundColor: '#f1f1f1',
          }}
        >
          {selectedPothole && (
            <img
              src={selectedPothole.image}
              style={{ objectFit: 'cover' }}
              alt={`Pothole at ${selectedPothole.location}`}
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default PotholeProcessList;
