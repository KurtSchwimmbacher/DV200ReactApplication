import Carousel from 'react-bootstrap/Carousel';
import "../App.css"



// import dnd images
import Bard from "../assets/Carousel-Images/Bard.jpg";
import Cleric from "../assets/Carousel-Images/Cleric.jpg";
import Druid from "../assets/Carousel-Images/Druid.jpg";
import Fighter from "../assets/Carousel-Images/Fighter.jpg";
import Monk from "../assets/Carousel-Images/Monk.jpg";
import Paladin from "../assets/Carousel-Images/Paladin.jpg";
import Ranger from "../assets/Carousel-Images/Ranger.jpg";
import Rogue from "../assets/Carousel-Images/Rogue.jpg";
import Sorcerer from "../assets/Carousel-Images/Sorcerer.jpg";
import Warlock from "../assets/Carousel-Images/Warlock.jpg";
import Wizard from "../assets/Carousel-Images/Wizard.jpg";
import Barbarian from "../assets/Carousel-Images/Barbarian.jpg";

function CarouselBento() {
    let infoObj = [];

    infoObj = [
        {
            id:1,
            image: Bard,
            title: "Bard",
            color: "#faf9f6"
        },
        {
            id:2,
            image: Barbarian,
            title: "Barbarian",
            color: "#faf9f6"
        },
        {
            id:3,
            image: Cleric,
            title: "Cleric",
            color: "#faf9f6"
        },
        {
            id:4,
            image: Druid,
            title: "Druid",
            color: "#faf9f6"
        },
        {
            id:5,
            image: Fighter,
            title: "Fighter",
            color: "#faf9f6"
        },
        {
            id:6,
            image: Monk,
            title: "Monk",
            color: "#faf9f6"
        },
        {
            id:7,
            image: Paladin,
            title: "Paladin",
            color: "#faf9f6"
        },
        {
            id:8,
            image: Ranger,
            title: "Ranger",
            color: "#faf9f6"
        },
        {
            id:9,
            image: Rogue,
            title: "Rogue",
            color: "#faf9f6"
        },
        {
            id:10,
            image: Sorcerer,
            title: "Sorcerer",
            color: "#faf9f6"
        },
        {
            id:11,
            image: Warlock,
            title: "Warlock",
            color: "#faf9f6"
        },
        {
            id:12,
            image: Wizard,
            title: "Wizard",
            color: "#faf9f6"
        }
    ]


  return (
    <Carousel data-bs-theme= "dark">


    {infoObj.map(item => (
        <Carousel.Item key={item.id}>
             {/* <Carousel.Caption >
            <h3 className='car-title' style={{color: item.color}}>{item.title}</h3>
        </Carousel.Caption> */}
        <img
            className="d-block carousel-img" style={{height:350,marginBottom:50}}
            src={item.image}
            alt={item.title}
        />
       
        </Carousel.Item>
     ))}


    </Carousel>
  );
}

export default CarouselBento;