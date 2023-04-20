import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { StyleBlueTitleByH1AndHr, getDateYYYY_MM, getDurationYearAndMonths } from 'common/Utils';
import jsonData from 'data/Education.json';
import { Badge, Col, Row } from 'react-bootstrap';

const educationData = {
  list: jsonData.list,
};

const store = createStore((state, action) => {
  if (state === undefined) return educationData;
  return state;
});

export default function Educations() {
  if (!educationData.list || !Array.isArray(educationData.list) || educationData.list.length <= 0) {
    return null;
  }

  return (
    <div id="education" className="mt-5">
      <Row sm={12} md={12}>
        <StyleBlueTitleByH1AndHr title={'Education'} />
      </Row>
      <Provider store={store}>
        <CreateEducation />
      </Provider>
    </div>
  );
}

// 무조건 Array, length > 0 인 경우에만 실행됨
function CreateEducation() {
  var educations = useSelector((state) => {
    return state.list;
  });
  var render = () => {
    let rowResult = [];
    let index = 0;
    educations.map((item, idx) => {
      //자바스크립트 구조분해할당, 써보고싶어서... 별다른이유는없음.. 사실 클래스쓰는게 더 적당해 보이긴 함..
      let {
        title: { main: titleMain, sub: titleSub },
        date: { start: startDate, end: endDate },
        tag,
      } = item;
      startDate = getDateYYYY_MM(startDate);

      //시작일또는 메인 타이틀이 없는 경우 데이터가 없는 것으로 판단 Row를 생성하지 않는다.
      if (!startDate || !titleMain) {
        return null;
      }

      rowResult.push(
        <>
          {index > 0 ? <hr style={{ textAlign: 'center', width: '100%', margin: '10px' }} /> : null}
          <Row md={12} xs={12} key={'educationsRow' + idx.toString()}>
            <CreateEducationLeftCol
              key={'educationsLeftCol' + titleMain + '_' + idx.toString()}
              start={startDate}
              end={getDateYYYY_MM(endDate)}
              duration={getDurationYearAndMonths(startDate, endDate)}
              tag={tag}
            />
            <CreateEducationRightCol
              key={'educationRightCol' + titleMain + '_' + idx.toString()}
              title={{ main: titleMain, sub: titleSub }}
            />
          </Row>
        </>,
      );
      index++;
    });
    return rowResult;
  };

  return render();
}

function CreateEducationRightCol({ title: { main, sub } }) {
  return (
    <Col md={9} sm={12}>
      <h4>
        <b>{main}</b>
      </h4>
      {sub ? <small style={{ color: 'gray' }}>{sub}</small> : null}
    </Col>
  );
}

function CreateEducationLeftCol({
  start,
  end,
  duration: { result: durationResult, year: durationYear, months: durationMonths },
  tag,
}) {
  let dateRender = (start, end) => {
    if (!end) {
      return <small>{start}</small>;
    }
    return <small>{start + ' ~ ' + end}</small>;
  };

  let durationRender = (result, year, months) => {
    if (result === 'fail') {
      return null;
    }
    let str = '';
    if (year > 0) {
      str += year + '년 ';
    }
    if (months > 0) {
      str += months + '개월';
    }

    return (
      <Badge bg={'info'} style={{ fontWeight: 400, marginRight: 2 }} className="mr-1">
        {str}
      </Badge>
    );
  };

  let tagRender = (tag) => {
    if (!tag) return null;
    let result = [];
    tag.map((tag, idx) => {
      if (typeof tag === 'string') {
        result.push(
          <Badge
            bg={'secondary'}
            style={{ fontWeight: 400, marginRight: 2 }}
            className="mr-1"
            key={tag + '_tag_' + idx.toString()}
          >
            {tag}
          </Badge>,
        );
      }
    });
    return result;
  };

  return (
    <Col md={3} sm={12}>
      <div style={{ color: 'green' }}>
        <h4>{dateRender(start, end)}</h4>

        <div>
          {durationRender(durationResult, durationYear, durationMonths)}
          {tagRender(tag)}
        </div>
      </div>
    </Col>
  );
}
