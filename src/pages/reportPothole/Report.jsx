import React, { useState } from 'react';
import './Report.css'; // 스타일을 적용할 CSS 파일
import ReportForm from '../ReportForm.jsx';
import CheckReportForm from '../CheckReportForm.js';
import ConfirmReport from '../ConfirmReport.js';
import { Box, Button, Typography } from '@mui/material';

function PotholeReport() {
  const [activeTab, setActiveTab] = useState('report');

  const renderContent = () => {
    switch (activeTab) {
      case 'report':
        return (
          <div>
            <h2>신고내용 및 방법</h2>
            <table>
              <tbody>
                <tr>
                  <td className="left-column">신고대상도로</td>
                  <td className="right-column">
                    고속도로, 일반국도, 특별·광역시도, 지방도, 시·군도
                  </td>
                </tr>
                <tr>
                  <td className="left-column">신고내용</td>
                  <td className="right-column">
                    불편한 사항이나 사항을 요구하는 사항, 위치, 신고자 연락처 등
                  </td>
                </tr>
                <tr>
                  <td className="left-column">신고대상 이용불편 사례</td>
                  <td className="right-column">
                    <p>◾ 도로포장 불량</p>
                    <p>◾ 부족한 도로표지판</p>
                    <p>◾ 파손된 안전시설물 정비요망</p>
                    <p>◾ 무단으로 설치된 불법 도로점용물</p>
                    <p>◾ 기타 도로이용에 불편한 사항 등</p>
                  </td>
                </tr>
                <tr>
                  <td className="left-column">신고방법</td>
                  <td className="right-column">해당 페이지에서 신청서 작성</td>
                </tr>
              </tbody>
            </table>
            <br />
            <h2>도로이용불편신고 사례신고시</h2>
            <p>
              ⁃ 신고사항건에 대하여는 민원서류 수준으로 분류하여
              해당기관(부서)에 신속하게 통보
            </p>
            <p>⁃ 운영담당자는 해당기관(부서)에 통보하였음을 신고자에게 통보</p>
            <p>
              ⁃ 해당기관에서 조치계획제출 또는 시정조치하고 결과를 신고자에게
              통보
            </p>
          </div>
        );
      case 'centerInfo':
        return (
          <div>
            <h2>도로이용불편신고센터현황</h2>
            <div className="content-section">
              <p>도로이용불편신고센터의 현황을 안내합니다.</p>
            </div>
          </div>
        );
      case 'form':
        return (
          <ReportForm onSubmit={() => setActiveTab('submitConfirmation')} />
        );
      case 'submitConfirmation':
        return <CheckReportForm />;
      case 'confirmation':
        return <ConfirmReport />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        border: '0px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h3">도로이용불편신고</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <Button variant="contained" onClick={() => setActiveTab('report')}>
          신고내용및처리절차법
        </Button>
        <Button variant="contained" onClick={() => setActiveTab('centerInfo')}>
          도로이용불편신고센터현황
        </Button>
        <Button variant="contained" onClick={() => setActiveTab('form')}>
          신청서작성
        </Button>
        <Button
          variant="contained"
          onClick={() => setActiveTab('confirmation')}
        >
          신고내용확인
        </Button>
      </Box>
      <div className="content">{renderContent()}</div>
    </Box>
  );
}

export default PotholeReport;
