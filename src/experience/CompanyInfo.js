import React from 'react';
import moment, { diff } from 'moment';
import { StyleBlueTitleByH1AndHr, getDateYYYY_MM } from 'common/Utils';

export default class CompanyInfo {
  constructor(item) {
    //회사명
    this.name = item.companyName;

    // 재직당시 팀, 업무포지션, 직위
    this.team = item.companyTeam;
    this.job = item.companyJob;
    this.position = item.companyPosition;

    // 입사, 퇴사일
    this.joinDate = getDateYYYY_MM(item.companyJoinDate);
    this.resignDate = getDateYYYY_MM(item.companyResignDate);

    // 재직기간
    this.durationDate = null;

    // 총 재직 년 월
    this.durationYear = 0;
    this.durationMonth = 0;

    // 시작일이 없으면 모두 표기를 안함
    if (this.joinDate) {
      if (this.resignDate) {
        this.durationDate = moment(this.resignDate).diff(this.joinDate, 'months') + 1;
      }
      if (!this.resignDate) {
        this.durationDate = moment(moment(new Date())).diff(this.joinDate, 'months') + 1;
      }
    }
    if (this.durationDate) {
      this.durationYear = Math.floor(this.durationDate / 12);
      this.durationMonth = this.durationDate % 12;
    }
  }

  getJobAndPosition() {
    //Job만 있는 경우
    if (this.job && !this.position) {
      return <small>{this.job}</small>;
    }

    //position만 있는 경우
    if (!this.job && this.position) {
      return <small>{this.position}</small>;
    }

    if (this.job && this.position) {
      return <small>{this.job + ' / ' + this.position}</small>;
    }
    return null;
  }

  // 시작일이 없으면 비교가 불가능하여 표기를 안함
  getDurationYearAndMonth() {
    if (!this.joinDate) {
      return null;
    }

    var pushStr = '약 ';
    if (this.durationYear > 0) {
      pushStr += this.durationYear + '년 ';
    }
    if (this.durationMonth > 0) {
      pushStr += this.durationMonth + '개월';
    }

    return (
      <small>
        <b>{pushStr}</b>
      </small>
    );
  }

  //일단 시작일이 없으면 표기를 하지 않는다.
  getDateJoinToResign() {
    if (!this.joinDate) {
      return null;
    }

    var pushStr = this.joinDate + ' ~ ';

    if (this.resignDate) {
      pushStr += this.resignDate;
    }
    return <small>{pushStr}</small>;
  }
}
