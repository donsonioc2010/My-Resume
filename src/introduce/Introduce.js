import React from 'react';
import jsonData from 'data/Introduce.json';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { Badge, Col, Row } from 'react-bootstrap';
import { Style } from 'common/Style';
import { StyleBlueTitleByH1AndHr } from 'common/Utils';
import moment from 'moment';
import 'moment/locale/ko';
import './Introduce.css';

var introduceData = {
  type: jsonData.type,
  introduces: jsonData.introduces,
  latestUpdatedAt: jsonData.latestUpdatedAt,
};

/*
    introduceType의 경우 List혹은 그 이외로 지정한다.
    LIST인 경우 LI타입으로 지정이 되며 아니면, Sentence형식으로 나열을 한다.
 */

export default function Introduce() {
  // redux에 데이터는 넣지만 수정은 필요없음
  const store = createStore((state, action) => {
    if (state === undefined) {
      return introduceData;
    }
    return state;
  });

  return (
    <div id="introduce" className="mt-5">
      <Row>
        <Col sm={12} md={12}>
          <StyleBlueTitleByH1AndHr title={'Introduce'} />
          <Provider store={store}>
            <IntroduceDetail />
            <LatestUpdatedComponent />
          </Provider>
        </Col>
      </Row>
    </div>
  );
}

function IntroduceDetail() {
  var type = useSelector((state) => {
    return state.type;
  });

  if (type === 'LIST') {
    return <ListTypeComponent />;
  }
  return <SentenceTypeComponent />;
}

function ListTypeComponent() {
  var introduces = useSelector((state) => {
    return state.introduces;
  });

  // var a = Array.isArray(introduces); a = true , 배열인지 확인
  return (
    <ul>
      {introduces.map((introduce, index) => {
        if (Array.isArray(introduce)) {
          return <ListArySentence introduces={introduce} number={(index + 1) * 10} />;
        } else {
          return <TemplateLi content={introduce} index={index + 1} />;
        }
      })}
    </ul>
  );
}
function ListArySentence(props) {
  var subIntroduces = props.introduces;
  var number = props.number;
  return (
    <ul>
      {subIntroduces.map((introduce, index) => {
        if (Array.isArray(introduce)) {
          return <ListArySentence introduces={introduce} number={number * 10 + (index + 1) * 10} />;
        } else {
          return <TemplateLi content={introduce} index={number + (index + 1)} />;
        }
      })}
    </ul>
  );
}
function TemplateLi(props) {
  var content = props.content;
  var i = props.index;
  return (
    <li key={'TemplateLi' + i.toString()}>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </li>
  );
}

function SentenceTypeComponent() {
  var introduces = useSelector((state) => {
    return state.introduces;
  });
  return introduces.map((introduce, index) => {
    return (
      <p key={'SentenceType' + index.toString()}>
        <p dangerouslySetInnerHTML={{ __html: introduce }}></p>
      </p>
    );
  });
}

function LatestUpdatedComponent() {
  var latestUpdated = useSelector((state) => {
    return moment(new Date(state.latestUpdatedAt)).format('YYYY.MM.DD');
  });
  var nowTime = moment();
  var latestUpdatedByNow = Math.floor(moment.duration(nowTime.diff(latestUpdated)).asDays());

  return (
    <p className="text-end">
      <small>Latest Updated</small>{' '}
      <Badge bg="secondary">
        {' '}
        {latestUpdated} <small>(D+{latestUpdatedByNow})</small>
      </Badge>
    </p>
  );
}
