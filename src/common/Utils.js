import moment from 'moment';
import { Style } from './Style';
/**
 * title의 text를 기록하며, title이 없는 경우에는 url를 삽입한다.
 * url값은 필수
 * @param {*} props.url
 * @param {*} props.title
 */

export function HrefTargetBlank(props) {
  var url = props.url;
  var title = props.title;

  var style = {
    color: 'blue',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <a href={url} style={style} target="_blank" rel="noreferrer noopener">
      {title || url}
    </a>
  );
}

export function StyleBlueTitleByH1AndHr(props) {
  var title = props.title;

  return (
    <div style={Style.blue}>
      <h1>{title}</h1>
      <hr />
    </div>
  );
}

export function getDateYYYY_MM(date) {
  return isDateYYYY_MM(date) ? moment(new Date(date)).format('YYYY.MM') : null;
}

function isDateYYYY_MM(date) {
  //return moment(date, 'YYYY-MM', true).isValid();
  return moment(date, 'YYYY-MM').isValid();
}

/**
 * 몇년 몇개월의 근무인지를 반환, {result:'result', year: number, months:numbers}형태로 반환한다.
 * 시작 또는 종료일이 비어있거나 문제가 생긴 경우 result를 'fail'값으로, 모든것을 0으로 return한다
 * @param {*} startDate Format : 'YYYY-MM'
 * @param {*} endDate   Format : 'YYYY-MM'
 */
export function getDurationYearAndMonths(startDate, endDate) {
  let returnValue = (result, year, months) => {
    return {
      result: result,
      year: year,
      months: months,
    };
  };

  let validDateType = isDateYYYY_MM(startDate) && isDateYYYY_MM(endDate);
  if (!validDateType) {
    return returnValue('fail', 0, 0);
  }

  let durationMonths = moment(endDate).diff(startDate, 'months') + 1;
  return returnValue('success', Math.floor(durationMonths / 12), durationMonths % 12);
}
