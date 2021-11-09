import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { Box } from "@mui/material";
import ProductsTable from "../components/ProductsTable";
import SignOutButton from "../components/SignOutButton";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductsList = ({ signOut, ...props }) => {
  const db = firebase.firestore();
  const productsRef = db.collection("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (db) {
      const unsuscribe = db
        .collection("products")
        .orderBy("name", "asc")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setProducts(data);
        });

      return unsuscribe;
    }
  }, [db]);

  /** No usar: utilizado para cargar registros en la BBDD */
  const addProduct = (sku, name, price) => {
    productsRef.add({ sku, name, price });
  };

  /** No usar: utilizado para cargar registros en la BBDD */
  const getRandomPrice = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  /** No usar: utilizado para cargar registros en la BBDD */
  const loadProducts = () => {
    for (let i = 100; i < 1000; i++) {
      let price = getRandomPrice();
      addProduct("v_firma_sku_0" + i, "product_name_0" + i, price);
    }
  };

  return (
    <Box sx={{ p: 5 }}>
      {products.length ? (
        <ProductsTable products={products} />
      ) : (
        <LoadingSpinner />
      )}

      <SignOutButton onClick={signOut}>Sign out</SignOutButton>

      {/** No usar: utilizado para cargar registros en la BBDD */}
      <Box sx={{ display: "none" }}>
        <button onClick={() => loadProducts()}>Load products</button>
      </Box>
    </Box>
  );
};

export default ProductsList;
