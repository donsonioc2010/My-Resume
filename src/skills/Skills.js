import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import jsonData from 'data/Skills';
import { Style } from 'common/Style';
import { Badge, Col, Row, Table } from 'react-bootstrap';
import { StyleBlueTitleByH1AndHr } from 'common/Utils';
import './Skills.css';

/**
 * {
 *  type[ {theme, list[ {title, level}]}]
 * }
 */

const skillsData = {
  type: jsonData.type,
  skillLayer: jsonData.skillLayer,
};

const store = createStore((state, action) => {
  if (state === undefined) {
    return skillsData;
  }
  return state;
});

/**
 * 데이터가 없는 경우 skills는 표현되지 않는다.
 * @returns
 */
export default function Skills() {
  if (!Array.isArray(skillsData.type) || skillsData.type.length === 0 || skillsData === undefined) {
    return <div id="skills"></div>;
  }

  return (
    <div id="skills" className="mt-5">
      <Provider store={store}>
        <Row>
          <Col md={12} sm={12}>
            <StyleBlueTitleByH1AndHr title={'Skills'} />
          </Col>
          <PrintSkillsList />
        </Row>
      </Provider>
    </div>
  );
}

// skillsList가 배열이면서 length가 0이 아니어야 실행됨
function PrintSkillsList() {
  var themeList = useSelector((state) => {
    return state.type;
  });

  return themeList.map((item, idx) => {
    var titleName = item.theme;
    var list = item.list;

    if (!titleName || !list || !Array.isArray(list) || list.length === 0) {
      return null; //theme값이 비어있으면 아무것도 Return안함
    }
    return (
      <>
        <ThemeRow
          key={'ThemeRows' + idx.toString()}
          themeName={titleName}
          skills={list}
          idx={idx}
        />
      </>
    );
  });
}

function ThemeRow(props) {
  var themeName = props.themeName;
  var idx = props.idx;

  console.log(themeName, '  ', idx);
  return (
    <>
      <Row>
        {idx > 0 ? <hr style={{ textAlign: 'center', width: '100%' }} /> : null}
        <Col sm={12} md={3} className="align-self-center">
          {/* h3로 해봤는데 너무 크네.. */}
          <h4 style={{ color: 'green' }}>{themeName}</h4>
        </Col>
        <Col sm={12} md={9}>
          <SkillsRow skills={props.skills} />
        </Col>
      </Row>
    </>
  );
}

function SkillsRow(props) {
  var layer = useSelector((state) => {
    return state.skillLayer;
  });
  var skills = props.skills;
  var rowNum = Math.ceil(skills.length / layer);
  var mdValue = Math.floor(12 / layer);

  var renderling = () => {
    var result = [];
    for (let i = 0; i < rowNum; i++) {
      //result.push(<Row className="mt-md-0 mx-auto">{colRender(i)}</Row>);
      result.push(
        <Row md={12} xs={12} key={'Col' + i.toString()}>
          {colRender(i)}
        </Row>,
      );
    }
    return result;
  };

  var colRender = (i) => {
    var colResult = [];
    for (let j = 0; j < layer; j++) {
      // 012, 345~
      let idx = layer * i + j;
      let skill = skills[idx];
      if (skill) {
        let skillTitle = skill.title;
        let haveLevel = skill.level ? true : false;
        colResult.push(
          <Col md={mdValue}>
            <CreateBadge key={idx.toString()} info={skill} />
            {skillTitle}
          </Col>,
        );
      } else {
        // skill정보가 없는 경우 (빈Line으로 넣기 위함)
        colResult.push(<li style={Style.liTypeNone}></li>);
      }
    }
    return colResult;
  };

  return <Row className="mt-2 mt-md-0">{renderling()}</Row>;
}

function CreateBadge(props) {
  var skill = props.info;
  var skillLevel = skill.level;

  if (!skillLevel) {
    return '';
  }

  const color = () => {
    switch (skillLevel) {
      case 3: {
        return 'primary';
      }
      case 2:
        return 'secondary';
      case 1:
      default: {
        return 'light';
      }
    }
  };

  return (
    <span>
      <Badge pill color={color}>
        {skillLevel}
      </Badge>{' '}
    </span>
  );
}
