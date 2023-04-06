import React from 'react';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faBlogger, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import pd from 'data/Profile.json';
import { Alert, Col, Row } from 'react-bootstrap';
import { Style } from 'common/Style';
import 'profile/Profile.css';
import Profile from 'profile/Profile';
import ContactDetail from 'profile/ContactDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 연락처 정보를 표현하기 위한 Component
 */

var contactData = {
  img: pd.profile.img,

  name: {
    title: pd.name.title,
    small: pd.name.small,
  },

  //Email, Phone, Git, Blog, Insta, LinkdIn , info-notice 순서
  //만약 링크를 걸고싶지 않다면 '' 혹은 '#'으로 설정, json에서 '#'으로 설정해도 된다.
  contact: [
    {
      title: pd.contact.email.title,
      link: pd.contact.email.link,
      icon: faEnvelope,
    },
    {
      title: pd.contact.phone,
      link: '#',
      icon: faPhone,
    },
    {
      title: pd.contact.git.title,
      link: pd.contact.git.link,
      icon: faGithub,
    },
    {
      title: pd.contact.blog.title,
      link: pd.contact.blog.link,
      icon: faBlogger,
    },
    {
      title: pd.contact.insta.title,
      link: pd.contact.insta.link,
      icon: faInstagram,
    },
    {
      title: pd.contact.linkedin.title,
      link: pd.contact.linkedin.link,
      icon: faLinkedinIn,
    },
  ],
  notice: {
    title: pd.infoNotice,
    icon: faBell,
  },
};

export default function Contact() {
  const store = createStore((state, action) => {
    // 수정필요 X
    if (state === undefined) {
      return contactData;
    }
    return state;
  });

  return (
    <div id="contact">
      <Provider store={store}>
        <Row>
          <Col md={3} sm={12}>
            <Profile></Profile>
          </Col>
          <Col md={9} sm={12}>
            <ContactMethod></ContactMethod>
          </Col>
        </Row>
      </Provider>
    </div>
  );
}

function ContactMethod() {
  return (
    <div id="contact-method">
      <NameArea></NameArea>
      <ContactList></ContactList>
      <InfoNoticeArea></InfoNoticeArea>
    </div>
  );
}

/**
 * Name.title | Name.small 같이 기록
 * @returns
 */
function NameArea() {
  const name = useSelector((state) => {
    return state.name;
  });
  return (
    <Row>
      <Col className="text-center text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function ContactList() {
  const contactAry = useSelector((state) => {
    return state.contact;
  });
  return (
    <Row>
      <Col className="pt-3">
        {contactAry.map((contact, index) => {
          return <ContactDetail key={index.toString()} info={contact} />;
        })}
      </Col>
    </Row>
  );
}

/*
  notice: {
    title: pd.infoNotice,
    icon: faBell,
  },
*/
function InfoNoticeArea() {
  const notice = useSelector((state) => {
    return state.notice;
  });
  return (
    <Row>
      <Col>
        <Alert
          role="alert"
          color="secondary"
          className="mt-3 alert-secondary"
          style={{ color: 'black' }}
        >
          {notice.icon ? <FontAwesomeIcon icon={notice.icon} className="mr-2" /> : ''}
          <b>{'  ' + notice.title}</b>
        </Alert>
      </Col>
    </Row>
  );
}
