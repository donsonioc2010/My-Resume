import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import jsonData from 'data/Skills';
import { Style } from 'common/Style';
import { Col, Row } from 'react-bootstrap';
import { StyleBlueTitleByH1AndHr } from 'common/Utils';

/**
 * {
 *  type[ {theme, list[ {title, level}]}]
 * }
 */

const skillsData = {
  type: jsonData.type,
};

const store = createStore((state, action) => {
  if (state === undefined) {
    return skillsData;
  }
  return state;
});

export default function Skills() {
  return (
    <div id="skills">
      <Provider store={store}>
        <Row>
          <Col md={12} sm={12}>
            <StyleBlueTitleByH1AndHr title={'Skills'} />
          </Col>
        </Row>
      </Provider>
    </div>
  );
}
