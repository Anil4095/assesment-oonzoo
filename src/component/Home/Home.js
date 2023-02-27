import { Button, Card, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import BasicBreadcrumbs from "../../Routes/BreadcrumbMenu";
import Beach4 from '../../images/beach4.jpg'
import Beach3 from '../../images/beach3.png'
import Beach2 from '../../images/beach2.png'
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import CardItem from "../Product/CartItem";

const useStyle = makeStyles(() => ({
  paperStyle: { padding: "10px 10px", width: "100%" },
  headerStyle: {
    margin: 0,
  },
  cardContainer: {
    height: "70%",
    backgroundColor: "#1bbd7e",
  },
  marginTop: {
    marginTop: 5,
  },
  categoryContainer: {
    marginTop: 70,
  },
  paperStyle1:{ padding: "10px 10px", width: "30%", marginTop: "10%" },
  slidesImage: {
    width: "100%",
    height: "10%"
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: `url${Beach2}`,
    backgroundColor: "gray"
  }
}));
var items = [
  {
    name: "Random Name #1",
    image : Beach4,
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    image : Beach3,
    description: "Hello World!",
  },
];

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <BasicBreadcrumbs />
      <Container>
        <Row>
          <Col sm={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-400"
                  src={Beach3}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-400"
                  src={Beach4}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={4} >
            <Card className={classes.cardContainer} >
              <img src={Beach2} />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className={classes.categoryContainer}> 
      <CardItem/>
      </div>
    </>
  );
};

export default Home;
