export class PotholeInfo {
  /**
   * @param {number} id
   * @param {string} image
   * @param {string} location
   * @param {Date} registeredAt
   * @param {boolean} isRepaired
   * @param {string} sido
   * @param {string} sigungu
   * @param {number} latitude
   * @param {number} longitude
   * @param {boolean} isValid
   * @param {boolean} isAiVerified
   */
  constructor(
    id,
    image,
    location,
    registeredAt,
    isRepaired,
    sido,
    sigungu,
    latitude,
    longitude,
    isValid,
    isAiVerified,
  ) {
    this.id = id;
    this.image = image;
    this.location = location;
    this.registeredAt = registeredAt;
    this.isRepaired = isRepaired;
    this.sido = sido;
    this.sigungu = sigungu;
    this.latitude = latitude;
    this.longitude = longitude;
    this.isValid = isValid;
    this.isAiVerified = isAiVerified;
  }

  isRepairedStatusLabel() {
    return this.isRepaired ? '수리완료' : '미수리';
  }
}
