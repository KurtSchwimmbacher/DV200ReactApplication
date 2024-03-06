import Carousel from 'react-bootstrap/Carousel';
import "../App.css"

// import images
import Karlach from "../assets/images/Karlach.png";
import Astarion from "../assets/images/Astarion.png";
import Gale from "../assets/images/Gale.png";
import Laezel from "../assets/images/Laezel.png";
import Shadowheart from "../assets/images/Shadowheart.png";
import Wyll from "../assets/images/Wyll.png";   


function CarouselBento(props) {
    let infoObj = [];

    switch (props.content){
        case("Classes1"):
            
        
        break;
    
        case("BG3"):

            infoObj =[
                {
                    id: 1,
                    image: Astarion,
                    title: "Astarion",
                    desc: "Astarion is an Origin character and a companion in Baldur's Gate 3. He is a High Elf Rogue with the Charlatan background, specialising in Stealth and Sneak Attacks.",
                },
                {
                    id: 2,
                    image: Gale,
                    title: "Gale",
                    desc: "Gale, full name Gale Dekarios, is an origin character and a recruitable companion with the Sage background. He is a human Wizard first appearing during Act 1.",
                },
                {
                    id:3,
                    image: Laezel,
                    title: "Lae'zel",
                    desc: "Lae'zel of crèche K'liir is an Origin character and a recruitable companion with the Soldier background. She is a githyanki and a Fighter first appearing during the Prologue."
                },
                {
                    id:4,
                    image: Karlach,
                    title: "Karlach",
                    desc:"Karlach, full name Karlach Cliffgate, is an Origin character and a recruitable companion with the Outlander background. She is a Zariel tiefling and a Barbarian first appearing during Act 1."
                },
                {
                    id:5,
                    image:Shadowheart,
                    title: "Shadowheart",
                    desc:"Shadowheart is an origin character and a recruitable companion with the Acolyte background. She is a high half-elf and a Trickery Domain Cleric first appearing during the Prologue."
                },
                {
                    id:6,
                    image: Wyll,
                    title: "Wyll",
                    desc: "Wyll, full name Wyllyam Ravengard, is an Origin character and a recruitable companion with the Folk Hero background. He is a human and a Warlock with The Fiend pact first appearing during Act 1."
                }
            ]

        break;

        case("Classes2"):

        break;

        default:
        break;
    }




  return (
    <Carousel data-bs-theme= "dark">


    {infoObj.map(item => (
        <Carousel.Item key={item.id}>
        <img
            className="d-block w-100"
            src={item.image}
            alt={item.title}
        />
        <Carousel.Caption className='car-title'>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
        </Carousel.Caption>
        </Carousel.Item>
     ))}


    </Carousel>
  );
}

export default CarouselBento;