import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import Listita from './Listita';
import HandleShow from './HandleShow';

function Formita() {
  return (
    <Row className='justify-content-md-center mt-3'>
      <Card style={{ width: '40rem', background:'#dbd9d9' }} >
        <Card style={{ background: '#969292'}}>
          <Card.Title className=' bold mt-3' style={{ color: '#e02222'}}>
            <b>Creación de Solicitud</b>
          </Card.Title>
        </Card>
        
        <Form>
        <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="IDCliente"><b>ID del Cliente</b></Form.Label>
              <Form.Control id="IDCliente" placeholder="11223354" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="Nombre"><b>Nombre del Cliente</b></Form.Label>
                <Form.Control id="Nombre" placeholder="Juan" disabled/>
              </Col>
              <Col>
                <Form.Label htmlFor="Apellido"><b>Apellidos del Cliente</b></Form.Label>
                <Form.Control id="Apellido" placeholder="Almaza Albacer" disabled/>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="Celular"><b>Teléfono</b></Form.Label>
              <Form.Control id="Celular" placeholder="+528128617496" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="Mail"><b>Email</b></Form.Label>
                <Form.Control id="Mail" placeholder="juanalmaza@gmail.com" disabled/>
              </Col>
              <Col>
                <Form.Label htmlFor="INE"><b>Número de INE</b></Form.Label>
                <Form.Control id="INE" placeholder="11111222222333" disabled/>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="Negocio"><b>Nombre del Negocio</b></Form.Label>
              <Form.Control id="Negocio" placeholder="Abarrotes Toñita" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="Giro"><b>Giro del Negocio</b></Form.Label>
                <Form.Control id="Giro" placeholder="Abarrotes" disabled/>
              </Col>
              <Col>
                <Form.Label htmlFor="Tamano"><b>Tamaño del Negocio</b></Form.Label>
                <Form.Control id="Tamano" placeholder="Pequeño" disabled/>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="Calle"><b>Calle del Negocio</b></Form.Label>
              <Form.Control id="Calle" placeholder="Juan Rulfo" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="Colonia"><b>Colonia del Negocio</b></Form.Label>
                <Form.Control id="Colonia" placeholder="Jardínez de Santa Lucía" disabled/>
              </Col>
              <Col>
                <Form.Label htmlFor="NumCasa"><b>Número de Casa</b></Form.Label>
                <Form.Control id="NumCasa" placeholder="1864" disabled/>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="CP"><b>Código Postal</b></Form.Label>
              <Form.Control id="CP" placeholder="64984" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="CEDI"><b>CEDI</b></Form.Label>
                <Form.Control id="CEDI" placeholder="Guadalupe" disabled/>
              </Col>
              <Col>
                <Form.Label htmlFor="Canal"><b>Canal</b></Form.Label>
                <Form.Control id="Canal" placeholder="Tradicional" disabled/>
              </Col>
            </Row>
          </div>

          <div className="mt-3">
            <Row>
              
              <Col>
              <Image
              src=
              "https://www.cokesolutions.com/content/cokesolutions/site/us/en/equipment/coolers/jcr:content/contentParsys/coolersandfountains_1328503254.image.249-320.png"
              thumbnail />
              </Col>
              <Col>
              
              <Form.Label htmlFor="Horario"><b>Horario de servicio</b></Form.Label>
              <Form.Control id="Horario" placeholder="8:00-17:00" disabled/>
              
              <Form.Label htmlFor="Refris"><b>Cantidad de refrigeradores a ordenar</b></Form.Label>
              <Form.Control id="Refris" placeholder="4" disabled/>
              
              <Form.Label htmlFor="Puertas"><b>Cantidad de puertas a ordenar</b></Form.Label>
              <Form.Control id="Puertas" placeholder="5" disabled/>

              <Listita/>
              </Col>
            </Row>
          </div>

          <div className="mt-2">
            <Row>
              <Col>
              
              <Form.Label htmlFor="Gane"><b>Ganancia total al mes</b></Form.Label>
              <Form.Control id="Gane" placeholder="$13,500" disabled/>
              
              </Col>
              <Col>
                <Form.Label htmlFor="IDSolicitud"><b>ID de Solicitud</b></Form.Label>
                <Form.Control id="IDSolicitud" placeholder="132546" disabled/>
              </Col>
              
            </Row>
          </div>
          <div className="mt-2">
            <Col className="mt-2">
              <HandleShow/>
            </Col>
            <Col className="mt-2">
              <Button variant="danger">Regresar</Button>{' '}
            </Col>
          </div>

          <div className="mt-2">
            
          </div>
        </Form>
      </Card>
    </Row>
  )
}

export default Formita