import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function ModalComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [classes,setClasses] = useState([]);
    useEffect(() => {
        const url = "https://www.dnd5eapi.co/api/classes";
        axios.get(url).then((response)=>{
            console.log(response.data.results)
            setClasses(response.data.results);
        })
    }, []);

  return (
    <>
      <Button onClick={handleShow} className='slct-class-btn'></Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {classes.map(item => (
                <>
                    <Card >
                        <Card.Img variant="top" src="../assets/images/Druid.png"/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;