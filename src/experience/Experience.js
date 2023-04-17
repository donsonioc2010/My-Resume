import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { Style } from 'common/Style';
import { Badge, Col, Row, Table } from 'react-bootstrap';
import { StyleBlueTitleByH1AndHr, getDateYYYY_MM } from 'common/Utils';
import jsonData from 'data/Experience.json';
import moment, { diff } from 'moment';
import CompanyInfo from './CompanyInfo';
import CreateCompanyInfo from './CreateCompanyInfo';
import CreateProjects from './CreateProjects';
import './Experience.css';

/**
 * {
      "companyName": "M-Doctor",
      "companyJoinDate": "2023-02",
      "companyTeam": "개발팀",
      "companyJob": "Developer",
      "companyPosition": "사원",
      "projects": [
        "사내 개발서버 구축",
        [
          "Jenkins를 활용한 개발서버 CI / CD 구축",
          "기존 도메인의 A레코드를 활용하여 개발서버 도메인 추가 및 관리"
        ],
        "Database관리",
        [
          "운영 DB의 경우 Proxy서버와 Was서버만 접근이 가능하도록 AWS VPC를 통한 관리",
          "개발 DB의 경우 DB설정을 통해 계정에 접속한 IP별로 DB에서 사용가능한 기능의 제한을 두는 방식으로 관리",
          "DB의 스키마에 대해서는 오픈소스인 DBDocs를 통하여 문서화해 총괄 관리"
        ],
        "Project 관리",
        [
          "README를 통하여 프로젝트의 이력 관리",
          "Git Organization 관리",
          [
            "Git Branch의 용도 구분 및 PR을 통한 Merge만 가능하도록 Rule 관리",
            "PR, Issue의 Convention관리"
          ],
          "프로젝트의 Refcatoring 진행",
          ["하드코딩 내역에 대하여 설정파일로 추출 및 실행 환경에 따른 사용 설정파일 분류"]
        ]
      ]
    }
 */
const experienceData = {
  experience: jsonData.experience,
};

const store = createStore((state, action) => {
  if (state === undefined) return experienceData;
  return state;
});

/**
 * experience가 배열이 아니면 데이터 표기를 안함
 */
export default function Experiences() {
  if (!Array.isArray(experienceData.experience) || experienceData.experience.length === 0) {
    return <div id="experience">Array Is Not Or undefined</div>;
  }

  return (
    <div id="experience" className="mt-5">
      <Row sm={12} md={12}>
        <StyleBlueTitleByH1AndHr title={'Experience'} />
      </Row>

      <Provider store={store}>
        <ExperienceRow />
      </Provider>
    </div>
  );
}

function ExperienceRow() {
  var experiences = useSelector((state) => {
    return state.experience;
  });

  var renderling = () => {
    var rowResult = [];
    experiences.map((item, idx) => {
      rowResult.push(
        <>
          {idx > 0 ? <hr style={{ textAlign: 'center', width: '100%', margin: '10px' }} /> : null}
          <Row md={12} xs={12} key={item.companyName + 'Row' + idx.toString()}>
            <Col md={4} sm={12} className="align-self-center">
              <CreateCompanyInfo info={new CompanyInfo(item)} />
            </Col>
            <Col md={8} sm={12}>
              <CreateProjects companyName={item.companyName} list={item.projects} />
            </Col>
          </Row>
        </>,
      );
    });

    return rowResult;
  };

  return renderling();
}
