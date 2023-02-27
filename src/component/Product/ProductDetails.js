import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  selectedProduct,
  removeSelectedProduct,
  addProductToCart,
} from "../../redux/action/productsActions";
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    width: "35%",
    height: "65%",
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: "skyBlue",
  },
}));

const ProductDetails = () => {
  const classes = useStyle();
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("response :", response);
    dispatch(selectedProduct(response.data));
  };

  
  
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  
  
  
  
  const addCartHandler = () => {
    console.log("product for add cart :", product);
    dispatch(addProductToCart(product));
  };
  
  
  return (
    <div className={classes.headerContainer}>
      <div className={classes.mainContainer}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className={classes.headerText}>
              <div className="header">
                <b>{title}</b>
              </div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
            <Button
              className={classes.buttonContainer}
              onClick={() => addCartHandler()}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
