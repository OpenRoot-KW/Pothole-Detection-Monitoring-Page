export const SIDO_DATA = [
  { label: '서울특별시', value: 'seoul' },
  { label: '부산광역시', value: 'busan' },
  { label: '대구광역시', value: 'daegu' },
  { label: '대전광역시', value: 'daejeon' },
  { label: '광주광역시', value: 'gwangju' },
  { label: '인천광역시', value: 'incheon' },
  { label: '울산광역시', value: 'ulsan' },
  { label: '세종특별자치시', value: 'sejong' },
  { label: '제주특별자치도', value: 'jeju' },
  { label: '경기도', value: 'gyeonggi' },
  { label: '강원도', value: 'gangwon' },
  { label: '충청북도', value: 'chungbuk' },
  { label: '경상북도', value: 'gyeongbuk' },
  { label: '전라북도', value: 'jeonbuk' },
  { label: '충청남도', value: 'chungnam' },
  { label: '경상남도', value: 'gyeongnam' },
  { label: '전라남도', value: 'jeonnam' },
];

export const getSigunguOptions = (sido) => {
  switch (sido) {
    case 'seoul':
      return [
        { label: '종로구', value: 'jongno' },
        { label: '중구', value: 'jung' },
        { label: '용산구', value: 'yongsan' },
        { label: '성동구', value: 'seongdong' },
        { label: '광진구', value: 'gwangjin' },
        { label: '동대문구', value: 'dongdaemun' },
        { label: '중랑구', value: 'jungnang' },
        { label: '성북구', value: 'seongbuk' },
        { label: '강북구', value: 'gangbuk' },
        { label: '도봉구', value: 'dobong' },
        { label: '노원구', value: 'nowon' },
        { label: '은평구', value: 'eunpyeong' },
        { label: '서대문구', value: 'seodaemun' },
        { label: '마포구', value: 'mapo' },
        { label: '양천구', value: 'yangcheon' },
        { label: '강서구', value: 'gangseo' },
        { label: '구로구', value: 'guro' },
        { label: '금천구', value: 'geumcheon' },
        { label: '영등포구', value: 'yeongdeungpo' },
        { label: '동작구', value: 'dongjak' },
        { label: '관악구', value: 'gwanak' },
        { label: '서초구', value: 'seocho' },
        { label: '강남구', value: 'gangnam' },
        { label: '송파구', value: 'songpa' },
        { label: '강동구', value: 'gangdong' },
      ];
    case 'busan':
      return [
        { label: '해운대구', value: 'haeundae' },
        { label: '수영구', value: 'suyeong' },
        { label: '남구', value: 'nam' },
        { label: '동래구', value: 'dongnae' },
        { label: '북구', value: 'buk' },
        { label: '서구', value: 'seo' },
        { label: '영도구', value: 'yeongdo' },
        { label: '사하구', value: 'saha' },
        { label: '금정구', value: 'geumjeong' },
        { label: '강서구', value: 'gangseo' },
        { label: '연제구', value: 'yeonje' },
        { label: '부산진구', value: 'busanjin' },
        { label: '동구', value: 'dong' },
        { label: '서구', value: 'seo' },
        { label: '남구', value: 'nam' },
      ];
    case 'incheon':
      return [
        { label: '중구', value: 'jung' },
        { label: '동구', value: 'dong' },
        { label: '미추홀구', value: 'michuhol' },
        { label: '연수구', value: 'yeonsu' },
        { label: '남동구', value: 'namdong' },
        { label: '부평구', value: 'bupyeong' },
        { label: '계양구', value: 'gyeyang' },
        { label: '서구', value: 'seo' },
      ];
    case 'daegu':
      return [
        { label: '중구', value: 'jung' },
        { label: '동구', value: 'dong' },
        { label: '서구', value: 'seo' },
        { label: '남구', value: 'nam' },
        { label: '북구', value: 'buk' },
        { label: '수성구', value: 'suseong' },
      ];
    case 'gwangju':
      return [
        { label: '동구', value: 'dong' },
        { label: '서구', value: 'seo' },
        { label: '남구', value: 'nam' },
        { label: '북구', value: 'buk' },
        { label: '광산구', value: 'gwangsan' },
      ];
    case 'daejeon':
      return [
        { label: '동구', value: 'dong' },
        { label: '중구', value: 'jung' },
        { label: '서구', value: 'seo' },
        { label: '유성구', value: 'yuseong' },
        { label: '대덕구', value: 'daedeok' },
      ];
    case 'ulsan':
      return [
        { label: '중구', value: 'jung' },
        { label: '남구', value: 'nam' },
        { label: '동구', value: 'dong' },
        { label: '북구', value: 'buk' },
        { label: '울주군', value: 'ulju' },
      ];
    case 'sejong':
      return [{ label: '세종시', value: 'sejong' }];
    case 'gyeonggi':
      return [
        { label: '수원시 장안구', value: 'suwon_jangan' },
        { label: '수원시 권선구', value: 'suwon_kwonseon' },
        { label: '수원시 팔달구', value: 'suwon_paldal' },
        { label: '수원시 영통구', value: 'suwon_yeongtong' },
        { label: '고양시 덕양구', value: 'goyang_deogang' },
        { label: '고양시 일산동구', value: 'goyang_ilsan_dong' },
        { label: '고양시 일산서구', value: 'goyang_ilsan_seo' },
        { label: '성남시 수정구', value: 'seongnam_sujeong' },
        { label: '성남시 중원구', value: 'seongnam_jungwon' },
        { label: '성남시 분당구', value: 'seongnam_bundang' },
        { label: '안산시 상록구', value: 'ansan_sangnok' },
        { label: '안산시 단원구', value: 'ansan_danwon' },
        { label: '안양시 만안구', value: 'anyang_manan' },
        { label: '안양시 동안구', value: 'anyang_dongan' },
        { label: '화성시', value: 'hwasung' },
        { label: '광명시', value: 'gwangmyeong' },
        { label: '파주시', value: 'paju' },
        { label: '이천시', value: 'icheon' },
        { label: '의정부시', value: 'uijeongbu' },
        { label: '포천시', value: 'pocheon' },
        { label: '동두천시', value: 'dongducheon' },
        { label: '여주시', value: 'yeoju' },
        { label: '연천군', value: 'yeoncheon' },
        { label: '양주시', value: 'yangju' },
        { label: '구리시', value: 'guri' },
        { label: '남양주시', value: 'namyangju' },
        { label: '오산시', value: 'osan' },
        { label: '안성시', value: 'anseong' },
        { label: '김포시', value: 'gimpo' },
        { label: '강주시', value: 'gangju' },
        { label: '여주군', value: 'yeoju_gun' },
        { label: '포천군', value: 'pocheon_gun' },
      ];
    case 'gangwon':
      return [
        { label: '춘천시', value: 'chuncheon' },
        { label: '원주시', value: 'wonju' },
        { label: '강릉시', value: 'gangneung' },
        { label: '동해시', value: 'donghae' },
        { label: '삼척시', value: 'samcheok' },
        { label: '속초시', value: 'sokcho' },
        { label: '정선군', value: 'jeongseon' },
        { label: '태백시', value: 'taebaek' },
        { label: '홍천군', value: 'hongcheon' },
        { label: '횡성군', value: 'hoengseong' },
        { label: '영월군', value: 'yeongwol' },
        { label: '평창군', value: 'pyeongchang' },
        { label: '철원군', value: 'cheorwon' },
        { label: '화천군', value: 'hwacheon' },
        { label: '양구군', value: 'yanggu' },
        { label: '인제군', value: 'inje' },
        { label: '고성군', value: 'goseong' },
      ];
    case 'chungbuk':
      return [
        { label: '청주시 청원구', value: 'cheongju_cheongwon' },
        { label: '청주시 서원구', value: 'cheongju_seowon' },
        { label: '청주시 상당구', value: 'cheongju_sangdang' },
        { label: '청주시 흥덕구', value: 'cheongju_heungdeok' },
        { label: '충주시', value: 'chungju' },
        { label: '제천시', value: 'jecheon' },
        { label: '보은군', value: 'boeun' },
        { label: '옥천군', value: 'okcheon' },
        { label: '영동군', value: 'yeongdong' },
        { label: '진천군', value: 'jincheon' },
        { label: '괴산군', value: 'goesan' },
        { label: '음성군', value: 'eumseong' },
        { label: '증평군', value: 'jeungpyeong' },
      ];
    case 'chungnam':
      return [
        { label: '천안시 동남구', value: 'cheonan_dongnam' },
        { label: '천안시 서북구', value: 'cheonan_seobuk' },
        { label: '공주시', value: 'gongju' },
        { label: '보령시', value: 'boryeong' },
        { label: '아산시', value: 'asan' },
        { label: '서산시', value: 'seosan' },
        { label: '논산시', value: 'nonsan' },
        { label: '계룡시', value: 'gyeryong' },
        { label: '당진시', value: 'dangjin' },
        { label: '금산군', value: 'geumsan' },
        { label: '부여군', value: 'buyeo' },
        { label: '서천군', value: 'seocheon' },
        { label: '청양군', value: 'cheongyang' },
        { label: '홍성군', value: 'hongseong' },
        { label: '예산군', value: 'yesan' },
        { label: '연기군', value: 'yeongi' },
      ];
    case 'jeonbuk':
      return [
        { label: '전주시 완산구', value: 'jeonju_wansan' },
        { label: '전주시 덕진구', value: 'jeonju_deokjin' },
        { label: '익산시', value: 'iksan' },
        { label: '정읍시', value: 'jeongeup' },
        { label: '군산시', value: 'gunsan' },
        { label: '남원시', value: 'namwon' },
        { label: '김제시', value: 'gimje' },
        { label: '완주군', value: 'wanju' },
        { label: '진안군', value: 'jinan' },
        { label: '무주군', value: 'muju' },
        { label: '장수군', value: 'jangsu' },
        { label: '순창군', value: 'sunchang' },
        { label: '임실군', value: 'imsil' },
        { label: '고창군', value: 'gochang' },
      ];
    case 'jeonnam':
      return [
        { label: '순천시', value: 'suncheon' },
        { label: '여수시', value: 'yeosu' },
        { label: '광양시', value: 'gwangyang' },
        { label: '목포시', value: 'mokpo' },
        { label: '담양군', value: 'damyang' },
        { label: '장성군', value: 'jangseong' },
        { label: '구례군', value: 'gurae' },
        { label: '곡성군', value: 'gokseong' },
        { label: '화순군', value: 'hwasun' },
        { label: '영광군', value: 'yeonggwang' },
        { label: '영암군', value: 'yeongam' },
        { label: '무안군', value: 'muan' },
        { label: '함평군', value: 'hampyeong' },
        { label: '해남군', value: 'haenam' },
        { label: '진도군', value: 'jindo' },
      ];
    case 'gyeongbuk':
      return [
        { label: '경산시', value: 'gyeongsan' },
        { label: '구미시', value: 'gumi' },
        { label: '경주시', value: 'gyeongju' },
        { label: '안동시', value: 'andong' },
        { label: '포항시 남구', value: 'pohang_nam' },
        { label: '포항시 북구', value: 'pohang_buk' },
        { label: '상주시', value: 'sangju' },
        { label: '군위군', value: 'gunwi' },
        { label: '의성군', value: 'uiseong' },
        { label: '청송군', value: 'cheongsong' },
        { label: '영양군', value: 'yeongyang' },
        { label: '영덕군', value: 'yeongdeok' },
        { label: '봉화군', value: 'bonghwa' },
        { label: '울진군', value: 'uljin' },
        { label: '울릉군', value: 'ulleung' },
      ];
    case 'gyeongnam':
      return [
        { label: '창원시 성산구', value: 'changwon_seongsan' },
        { label: '창원시 의창구', value: 'changwon_uichang' },
        { label: '창원시 진해구', value: 'changwon_jinhae' },
        { label: '진주시', value: 'jinju' },
        { label: '김해시', value: 'gimhae' },
        { label: '거제시', value: 'geoje' },
        { label: '통영시', value: 'tongyeong' },
        { label: '밀양시', value: 'milyang' },
        { label: '사천시', value: 'sacheon' },
        { label: '양산시', value: 'yangsan' },
        { label: '의령군', value: 'uiryeong' },
        { label: '함안군', value: 'haman' },
        { label: '함양군', value: 'hamyang' },
        { label: '거창군', value: 'geochang' },
        { label: '산청군', value: 'sancheong' },
        { label: '하동군', value: 'hadong' },
      ];
    case 'jeju':
      return [
        { label: '제주시', value: 'jeju' },
        { label: '서귀포시', value: 'seogwipo' },
      ];
    default:
      return [];
  }
};
