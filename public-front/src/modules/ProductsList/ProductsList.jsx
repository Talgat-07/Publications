import { useEffect } from "react";
import { useProductsStore } from "../../store/productsStore";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import styles from "./ProductsList.module.scss";
export const ProductsList = () => {
  const { products, getProducts } = useProductsStore();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className={styles.container}>
      {products &&
        products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
    </div>
  );
};
