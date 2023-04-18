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
      let companyExperience = new CompanyInfo(item);
      rowResult.push(
        <>
          {idx > 0 ? <hr style={{ textAlign: 'center', width: '100%', margin: '10px' }} /> : null}
          <Row md={12} xs={12} key={item.companyName + 'Row' + idx.toString()}>
            <Col md={3} sm={12}>
              <CreateCompanyInfo info={companyExperience} />
            </Col>
            <Col md={9} sm={12}>
              <CreateProjects
                companyName={item.companyName}
                list={item.projects}
                info={companyExperience}
              />
            </Col>
          </Row>
        </>,
      );
    });

    return rowResult;
  };

  return renderling();
}
