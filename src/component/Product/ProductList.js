import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/action/productsActions";
import ProductComponent from "../Product/Product";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("product details", products)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;