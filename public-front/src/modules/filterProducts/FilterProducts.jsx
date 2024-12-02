import { useEffect, useState } from "react";
import styles from "./FilterProducts.module.scss";
import { useProductsStore } from "../../store/productsStore";

export const FilterProducts = () => {
  const [isFilter, setFilter] = useState("0");
  const { filterProducts, getProducts } = useProductsStore();
  console.log(isFilter);

  useEffect(() => {
    if (isFilter === "0") {
      getProducts();
    } else {
      filterProducts(isFilter);
    }
  }, [isFilter]);

  return (
    <div className={styles.container}>
      <button
        style={{ backgroundColor: isFilter === "1" ? "red" : "transparent" }}
        onClick={() => setFilter((f) => (f !== "1" ? "1" : "0"))}
      >
        Rating
      </button>
      <button
        style={{ backgroundColor: isFilter === "2" ? "red" : "transparent" }}
        onClick={() => setFilter((f) => (f !== "2" ? "2" : "0"))}
      >
        Category
      </button>
    </div>
  );
};
