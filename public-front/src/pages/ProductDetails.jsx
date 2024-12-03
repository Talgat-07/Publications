import { useParams } from "react-router-dom";
import { useProductsStore } from "../store/productsStore";
import { useEffect } from "react";
import { AverageRating } from "../ui/averageRating/AverageRating";
import { CategoryRevive } from "../ui/categoryRevive/CategoryRevive";
import styles from "./ProductDetails.module.scss";
import { Comments } from "../modules/comments/Comments";

export const ProductDetails = () => {
  const { getOneProduct, product } = useProductsStore();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div className={styles.container}>
      {product && (
        <>
          <div className={styles.product}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <span>
              <CategoryRevive category={product.category} />
            </span>
            <span>
              <AverageRating rating={product.averageRating} />
            </span>
          </div>
          <div className={styles.comments}>
            <Comments id={id} />
          </div>
        </>
      )}
    </div>
  );
};
