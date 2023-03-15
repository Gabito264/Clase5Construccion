import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
function Listita() {
  return (
    <ListGroup as="ol" numbered className='mt-2'>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">CFX-19 CRIOTEC MEDIANO</div>
          
        </div>
        <Badge bg="dark" pill>
          x 1
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">CFX-42 CRIOTEC PEQUEÑO</div>
          
        </div>
        <Badge bg="dark" pill>
          x 3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"></div>
          
        </div>
        
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Listita