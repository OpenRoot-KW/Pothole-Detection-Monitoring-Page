import { sumBy } from '../utils/sum';
import { mapObject } from '../utils/mapObject';

export const Data = {
  seoul: {
    gu: ['종로구', '중구', '용산구', '성동구', '광진구'],
    potholes: [12, 19, 3, 5, 2],
    monthlyPotholes: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  },
  busan: {
    gu: ['해운대구', '수영구', '남구', '동래구', '북구'],
    potholes: [9, 14, 8, 6, 4],
    monthlyPotholes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  incheon: {
    gu: ['중구', '동구', '미추홀구', '연수구', '남동구'],
    potholes: [7, 12, 6, 4, 3],
    monthlyPotholes: [6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61],
  },
};

export const calculatePotholeSums = (data) => {
  return mapObject(data, ({ potholes }) => sumBy(potholes));
};

// 시/도별 포트홀 총합 객체
export const potholeSums = calculatePotholeSums(Data);
