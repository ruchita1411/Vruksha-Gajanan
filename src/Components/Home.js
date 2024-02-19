import React from "react";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import "../Components/Home.css";
import Base from "./Base";
import { CardBody, Container } from "reactstrap";
const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [
    {
      title: "Carousel 1",
      icon: img1,
    },
    {
      title: "Carousel 2",
      icon: img1,
    },
    {
      title: "Carousel 3",
      icon: img1,
    },
  ];
  return (
    <Base>
      {items.map((item) => {
        return (
          <div className="carousel">
            <Container>
              <CardBody className="m-3">
                <div>
                  <img src={item.icon} alt="loading.." className="slides"></img>
                  ;
                </div>
              </CardBody>
            </Container>
          </div>
        );
      })}
    </Base>
  );
};

export default Home;
