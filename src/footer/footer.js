import { HrefTargetBlank } from 'common/Utils';
import { Col, Row } from 'react-bootstrap';

const footer = {
  main: {},
  cover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },
};

export default function Footer() {
  return (
    <Row>
      <Col style={footer.cover}>
        <div style={footer.main} className="text-center mt-2">
          gd
        </div>
      </Col>
    </Row>
  );
}
