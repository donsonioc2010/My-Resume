import React from 'react';
import jsonData from 'data/Introduce.json';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Style } from 'common/Style';

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
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>Introduce</h2>
        </Col>
        <Col sm={12} md={9}>
          <Provider store={store}>
            <IntroduceDetail />
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
          return <ListArySentence introduces={introduce} />;
        } else {
          return <TemplateLi content={introduce} index={index} />;
        }
      })}
    </ul>
  );
}
function ListArySentence(props) {
  var subIntroduces = props.introduces;

  return (
    <ul>
      {subIntroduces.map((introduce, index) => {
        if (Array.isArray(introduce)) {
          return <ListArySentence introduces={introduce} />;
        } else {
          return <TemplateLi content={introduce} index={index} />;
        }
      })}
    </ul>
  );
}
function TemplateLi(props) {
  var content = props.content;
  var i = props.index;

  return (
    <li key={i.toString()}>
      <b dangerouslySetInnerHTML={{ __html: content }}></b>
    </li>
  );
}

function SentenceTypeComponent() {
  var introduces = useSelector((state) => {
    return state.introduces;
  });
  return <div>Sentence : {introduces}</div>;
}
