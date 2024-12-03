import { useNavigate } from "react-router-dom";
import { useProductsStore } from "../../store/productsStore";
import { AverageRating } from "../../ui/averageRating/AverageRating";
import { CategoryRevive } from "../../ui/categoryRevive/CategoryRevive";
import styles from "./ProductsCard.module.scss";
import { PATHS } from "../../constants/constants";
import { useCommentsStore } from "../../store/commentsStore";
export const ProductsCard = ({ product }) => {
  const nav = useNavigate();
  const { deleteProduct } = useProductsStore();
  const { deleteComment } = useCommentsStore();

  const deleteProductFunc = async (id) => {
    if (id) {
      deleteComment(id);
      deleteProduct(id);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => nav(`${PATHS.DETAILS}/${product._id}`)}
        className={styles.container}
      >
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
      <div
        onClick={() => deleteProductFunc(product._id)}
        className={styles.delete}
      >
        <span>DELETE</span>
      </div>
    </div>
  );
};
