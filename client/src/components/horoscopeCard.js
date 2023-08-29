import React, { useEffect } from 'react';
import {Accordion} from 'react-bootstrap';

const HoroscopeCard = ({ title, content }) => {
    return (
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>
            {content}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

export default HoroscopeCard;