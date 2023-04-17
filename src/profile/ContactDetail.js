import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HrefTargetBlank } from 'common/Utils';

/**
 * 
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
    {
      title: pd.infoNotice,
      icon: faBell,
    },
  ],
  다음의 항목이 `info` 명칭으로 props에 들어옴
 * 
 * 
 * @param {*} props 
 * @returns 
 */

export default function ContactDetail(props) {
  return (
    <Row>
      <Col xs={1} className="text-right">
        <FontAwesomeIcon icon={props.info.icon} />
      </Col>
      <Col xs="auto">{createContactTitle(props.info)}</Col>
    </Row>
  );
}

function createContactTitle(contact) {
  if (contact.link === '' || contact.link === '#') {
    return <span>{contact.title}</span>;
  }
  return <HrefTargetBlank url={contact.link} title={contact.title}></HrefTargetBlank>;
}
