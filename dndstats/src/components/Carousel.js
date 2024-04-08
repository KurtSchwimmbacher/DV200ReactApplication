import Carousel from 'react-bootstrap/Carousel';
import "../App.css"



// import dnd images
import Bard from "../assets/images/Bard.png";
import Cleric from "../assets/images/Cleric.png";
import Druid from "../assets/images/Druid.png";
import Fighter from "../assets/images/Fighter.png";
import Monk from "../assets/images/Monk.png";
import Paladin from "../assets/images/Paladin.png";
import Ranger from "../assets/images/Ranger.png";
import Rogue from "../assets/images/Rogue.png";
import Sorcerer from "../assets/Carousel-Images/Sorcerer.jpg";
import Warlock from "../assets/images/Warlock.png";
import Wizard from "../assets/images/Wizard.png";
import Barbarian from "../assets/images/Barbarian.png";

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