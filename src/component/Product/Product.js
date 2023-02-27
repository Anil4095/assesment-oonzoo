import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import BasicBreadcrumbs from "../../Routes/BreadcrumbMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { addProductToCart } from "../../redux/action/productsActions";

const useStyle = makeStyles(() => ({
  paperStyle: { padding: "10px 10px", width: "40%", margin: "10px auto" },
  headerStyle: {
    margin: 0,
  },
  cardContainer: {
    display: "flex",
    minWidth: "25%",
    flexGrow: 0
  },
  marginTop: {
    marginTop: 5,
  },
  checkboxSelection: {
    marginLeft: "70%",
  },
  mainContainer: {
    width: "25%",
    height: "30%",
    padding: 10,
    
  },
  buttonContainer: {
    marginLeft: "25%",
    backgroundColor: "skyBlue",
    textDecoration: "none",
  },
}));

const ProductComponent = () => {
  const classes = useStyle();
  const products = useSelector((state) => state.allProducts.products);
  let product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    console.log("product for add cart :", product);
    dispatch(addProductToCart(product));
  };

  return (
    <>
      <BasicBreadcrumbs />
      {products.map((element, index) => (
        <div style={{ display: "flex",flexGrow :0, minWidth: "25%" }}>
          <div className={classes.mainContainer} key={index}>
            <Link to={`/productDetails/${element.id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={element.image} alt={element.title} />
                  </div>
                  <div className="content">
                    <div className="header">{element.title}</div>
                    <div className="meta price">$ {element.price}</div>
                    <div className="meta">{element.category}</div>
                  </div>
                  
                </div>
                <Button
                    className={classes.buttonContainer}
                    onClick={() => addCartHandler()}
                  >
                    Add to Cart
                  </Button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
