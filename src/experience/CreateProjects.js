import React from 'react';
import { Style } from 'common/Style';
import { Col, Row } from 'react-bootstrap';
import CreateExperienceSkill from './CreateExperienceSkills';

export default function CreateProjects(props) {
  var projects = props.list;
  var companyInfo = props.info;
  var companyName = companyInfo.name;

  var render = () => {
    var result = [];
    result.push(
      <>
        <h4>
          <b>{companyName}</b>
        </h4>
        <small style={{ color: 'gray' }}>{companyInfo.getJobAndPosition()}</small>
        <ul style={{ marginTop: '10px' }}>
          {projects.map((item, idx) => {
            if (!Array.isArray(item)) {
              return (
                <b>
                  <CreateLi name={companyName} content={item} index={idx + 1} />
                </b>
              );
            } else {
              return <LoopArray name={companyName} data={item} index={(idx + 1) * 10} />;
            }
          })}
          <CreateExperienceSkill info={companyInfo} />
        </ul>
      </>,
    );

    return result;
  };

  return render();
}

function LoopArray(props) {
  var number = props.index;
  var result = [];
  var companyName = props.name;
  result.push(
    <ul>
      {props.data.map((item, idx) => {
        if (Array.isArray(item)) {
          return <LoopArray name={companyName} data={item} index={number * 10 + (idx + 1) * 10} />;
        } else {
          return <CreateLi name={companyName} content={item} index={number + (idx + 1)} />;
        }
      })}
    </ul>,
  );
  return result;
}

function CreateLi(props) {
  var content = props.content;
  var idx = props.index;
  var name = props.name;
  return (
    <li className="working-list" key={name + '_' + idx.toString()}>
      <span dangerouslySetInnerHTML={{ __html: content }}></span>
    </li>
  );
}
