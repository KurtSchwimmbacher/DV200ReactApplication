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

  const [active, setActive] = useState("");  
  const [classes,setClasses] = useState([]);

    useEffect(() => {
        const url = "https://www.dnd5eapi.co/api/classes";
        axios.get(url).then((response)=>{
            setClasses(response.data.results);
        })
    }, [active]);

    const handleCardClick = (className) => {
      console.log(className);
      const timeOutClose = setTimeout(()=>{
        handleClose()
      },400)
    };



  return (
    <>
      <Button onClick={handleShow} className='slct-class-btn' id='modalOpenBtn'></Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Class</Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={(e)=>{
          console.log(e.target.value)
        }}>
            {classes.map(item => (
                  <Card key={item.name} className='modal-card'  onClickCapture={handleCardClick(item.name)} >
                    <Card.Img variant="top" src={require(`../assets/images/${item.name}.png`)} />
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                      </Card.Body>
                  </Card>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;