import { useProductsStore } from "../../store/productsStore";
import { AverageRating } from "../../ui/averageRating/AverageRating";
import { CategoryRevive } from "../../ui/categoryRevive/CategoryRevive";
import styles from "./ProductsCard.module.scss";
export const ProductsCard = ({ product }) => {
  const { deleteProduct } = useProductsStore();
  return (
    <div className={styles.wrapper}>
      <div onClick={() => console.log(product)} className={styles.container}>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className={styles.bottom}>
          <span>
            <AverageRating rating={product.averageRating} />
          </span>
          <span>
            <CategoryRevive category={product.category} />
          </span>
        </div>
      </div>
      <div onClick={() => deleteProduct(product._id)} className={styles.delete}>
        <span>DELETE</span>
      </div>
    </div>
  );
};
