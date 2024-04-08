import Carousel from 'react-bootstrap/Carousel';
import "../App.css"

// import bg3 images
import Karlach from "../assets/images/Karlach.png";
import Astarion from "../assets/images/Astarion.png";
import Gale from "../assets/images/Gale.png";
import Laezel from "../assets/images/Laezel.png";
import Shadowheart from "../assets/images/Shadowheart.png";
import Wyll from "../assets/images/Wyll.png";   

// import dnd images
import Bard from "../assets/images/Bard.png";
import Cleric from "../assets/images/Cleric.png";
import Druid from "../assets/images/Druid.png";
import Fighter from "../assets/images/Fighter.png";
import Monk from "../assets/images/Monk.png";
import Paladin from "../assets/images/Paladin.png";
import Ranger from "../assets/images/Ranger.png";
import Rogue from "../assets/images/Rogue.png";
import Sorcerer from "../assets/images/Sorcerer.png";
import Warlock from "../assets/images/Warlock.png";
import Wizard from "../assets/images/Wizard.png";
import Barbarian from "../assets/images/Barbarian.png";

function CarouselBento(props) {
    let infoObj = [];

    switch (props.content){
        case("Classes1"):

        infoObj = [
            {
                id:1,
                image: Bard,
                title: "Bard",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:2,
                image: Barbarian,
                title: "Barbarian",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:3,
                image: Cleric,
                title: "Cleric",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:4,
                image: Druid,
                title: "Druid",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:5,
                image: Fighter,
                title: "Fighter",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:6,
                image: Monk,
                title: "Monk",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            }
        ]
            
        
        break;
    
        case("BG3"):

            infoObj =[
                {
                    id: 1,
                    image: Astarion,
                    title: "Astarion",
                    desc: "Astarion is an Origin character and a companion in Baldur's Gate 3. He is a High Elf Rogue with the Charlatan background, specialising in Stealth and Sneak Attacks.",
                    imgHeight: 400,
                    color: "#ffffff"
                },
                {
                    id: 2,
                    image: Gale,
                    title: "Gale",
                    desc: "Gale, full name Gale Dekarios, is an origin character and a recruitable companion with the Sage background. He is a human Wizard first appearing during Act 1.",
                    imgHeight: 400,
                    color: "#ffffff"
                },
                {
                    id:3,
                    image: Laezel,
                    title: "Lae'zel",
                    desc: "Lae'zel of crèche K'liir is an Origin character and a recruitable companion with the Soldier background. She is a githyanki and a Fighter first appearing during the Prologue.",
                    imgHeight: 400,
                    color: "#ffffff"
                },
                {
                    id:4,
                    image: Karlach,
                    title: "Karlach",
                    desc:"Karlach, full name Karlach Cliffgate, is an Origin character and a recruitable companion with the Outlander background. She is a Zariel tiefling and a Barbarian first appearing during Act 1.",
                    imgHeight: 400,
                    color: "#ffffff"
                },
                {
                    id:5,
                    image:Shadowheart,
                    title: "Shadowheart",
                    desc:"Shadowheart is an origin character and a recruitable companion with the Acolyte background. She is a high half-elf and a Trickery Domain Cleric first appearing during the Prologue.",
                    imgHeight: 400,
                    color: "#ffffff"
                },
                {
                    id:6,
                    image: Wyll,
                    title: "Wyll",
                    desc: "Wyll, full name Wyllyam Ravengard, is an Origin character and a recruitable companion with the Folk Hero background. He is a human and a Warlock with The Fiend pact first appearing during Act 1.",
                    imgHeight: 400,
                    color: "#ffffff"
                }
            ]

        break;

        case("Classes2"):
        infoObj = [
            {
                id:1,
                image: Paladin,
                title: "Paladin",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:2,
                image: Ranger,
                title: "Ranger",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:3,
                image: Rogue,
                title: "Rogue",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:4,
                image: Sorcerer,
                title: "Sorcerer",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:5,
                image: Warlock,
                title: "Warlock",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            },
            {
                id:6,
                image: Wizard,
                title: "Wizard",
                desc: "",
                imgHeight: 300,
                color: "#faf9f6"
            }
        ]

        break;

        default:
        break;
    }




  return (
    <Carousel data-bs-theme= "dark">


    {infoObj.map(item => (
        <Carousel.Item key={item.id}>
             <Carousel.Caption >
            <h3 className='car-title' style={{color: item.color}}>{item.title}</h3>
        </Carousel.Caption>
        <img
            className="d-block carousel-img" style={{height:item.imgHeight}}
            src={item.image}
            alt={item.title}
        />
       
        </Carousel.Item>
     ))}


    </Carousel>
  );
}

export default CarouselBento;