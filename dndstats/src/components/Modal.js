import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import axios from 'axios';


import defaultModalButton from "../assets/Icons/plus-circle-svgrepo-com.svg";

import Card from 'react-bootstrap/Card';

function ModalComp(props) {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState([]);
  // State to store the selected class image
  const [selectedClassImage, setSelectedClassImage] = useState(); 

  useEffect(() => {
    const url = "https://www.dnd5eapi.co/api/classes";
    axios.get(url).then((response)=>{
      setClasses(response.data.results);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardClick = (className, imageUrl) => {
    // Set the selected class image
    setSelectedClassImage(imageUrl); 
    // Pass the selected class name to the parent component
    props.onClassSelect(className); 
    handleClose(); 
  };

  return (
    <>
      <Button onClick={handleShow} className='slct-class-btn'id='modalOpenBtn' style={{background: "#FAF9F6", border: "none"}}>
  <img 
    src={selectedClassImage ? selectedClassImage : defaultModalButton} 
    alt="Selected Class"
    style={{ 
      width: '300px', 
      height: '300px', 
      objectFit: 'cover', 
      border: 'none'
    }} 
  />
</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {classes ? (
            classes.map((item) => (
              <Card key={item.name} className='modal-card' onClick={() => handleCardClick(item.name, require(`../assets/images/${item.name}.png`))}>
                <Card.Img variant="top" src={require(`../assets/images/${item.name}.png`)} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            ))
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;