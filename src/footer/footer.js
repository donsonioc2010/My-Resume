import { faBootstrap, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFile, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HrefTargetBlank } from 'common/Utils';
import { Col, Row } from 'react-bootstrap';
import jsonData from 'data/Footer';

const getData = jsonData();

console.log(getData);

const footer = {
  main: {},
  cover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
  },
  top: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '30px',
  },
};

var footerData = {
  repoUrl: getData.creatorGitRepo,
};

export default function Footer() {
  return (
    <>
      <Row style={footer.top}>
        <Col sm={12} md={6}>
          {/* Footer 좌측영역 */}
          <div style={footer.main} className="text-center mt-2">
            <FontAwesomeIcon icon={faGithub} style={{ paddingRight: '10px' }} />
            <HrefTargetBlank url={footerData.repoUrl} title={'Creator Git Repository'} />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div style={footer.main} className="text-center mt-2">
            <FontAwesomeIcon icon={faGithub} style={{ paddingRight: '10px' }} />
            <HrefTargetBlank
              url={'https://github.com/donsonioc2010/My-Resume'}
              title={'Origin Git Repository'}
            />
          </div>
          <div style={footer.main} className="text-center mt-2">
            <FontAwesomeIcon icon={faFile} style={{ paddingRight: '10px' }} />
            <HrefTargetBlank
              url={'https://github.com/donsonioc2010/My-Resume'}
              title={'Reference Resume'}
            />
          </div>
        </Col>
      </Row>
      <Row style={footer.cover}>
        <Col>
          <div style={footer.main} className="text-center mt-2">
            <FontAwesomeIcon icon={faReact} style={{ padding: '0 10 0 10' }} />
            v18.2.0 /
            <FontAwesomeIcon icon={faBootstrap} style={{ padding: '0 10 0 10' }} />
            v5.2.3 /
            <FontAwesomeIcon icon={faFontAwesome} style={{ padding: '0 10 0 10' }} />
            v6.4.0
          </div>
        </Col>
      </Row>
    </>
  );
}
