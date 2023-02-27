import { Button, createStyles, makeStyles, Paper } from "@material-ui/core";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/action/productsActions";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      justifyContent: "space-evenly",
      backgroundColor: "black",
      color: "white",
      boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 100)",
      border: "none",
    },
    cartContainer: {
      height: "100%",
    },
    listItemContainer: {
      height: "100%",
      marginLeft: 40,
    },
    imageSize: {
      height: "2%",
      width: "2%",
    },
  })
);

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

const CardItem = ({ id, title, image, price, category }) => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
  };

  const classes = useStyles();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Carousel cols={6} rows={1} gap={10} interval={6000} loop>
        {products.map((item, i) => (
          <div >
            <Paper className={classes.listItemContainer}>
              <img className={classes.imageSize} src={item.image} />
              <h6>{item.title.slice(0, 5)}</h6>
            </Paper>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CardItem;
