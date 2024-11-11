import React from 'react';

function CheckReportForm() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // 왼쪽으로 정렬
    alignItems: 'flex-start', // 상단 정렬
    width: '100%', // 전체 너비 사용
  };

  const contentSectionStyle = {
    backgroundColor: '#f0f0f0', // 회색 배경
    padding: '20px',
    borderRadius: '5px',
  };

  const paragraphStyle = {
    margin: '5px 0', // 줄간격 조절
  };

  return (
    <div style={containerStyle}>
      <div style={contentSectionStyle}>
        <h2>신고 완료</h2>
        <p style={paragraphStyle}>포트홀 신고가 성공적으로 접수되었습니다.</p>
        <p style={paragraphStyle}>
          신고해 주셔서 감사합니다. 귀하의 신고는 도로 관리팀에 전달되었으며,
          신속한 조치를 취할 예정입니다.
        </p>
        <p style={paragraphStyle}>
          필요 시 추가적인 연락을 위해 입력하신 연락처로 연락드리겠습니다.
        </p>
        <p style={paragraphStyle}>
          안전한 도로 환경을 위해 협조해 주셔서 감사합니다.
        </p>
      </div>
    </div>
  );
}

export default CheckReportForm;
