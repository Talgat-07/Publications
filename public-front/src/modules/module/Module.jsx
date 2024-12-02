import { createPortal } from "react-dom";
import styles from "./Module.module.scss";
import { useRef, useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import TextField from "@mui/material/TextField";
import { categoryData } from "../../constants/constants";
import { useProductsStore } from "../../store/productsStore";

export const Module = ({ isOpen, setOpen }) => {
  const [isName, setName] = useState("");
  const [isDescription, setDescription] = useState("");
  const [isCategory, setCategory] = useState("5");
  const [isRank, setRank] = useState("0");
  const ref = useRef(null);
  const { addProduct } = useProductsStore();
  useClickOutSide(ref, () => setOpen(false));
  if (!isOpen) return null;

  const addProductFunc = () => {
    if (isName !== "" && isDescription !== "") {
      addProduct({
        name: isName,
        description: isDescription,
        averageRating: isRank,
        category: isCategory,
      });
      setOpen(false);
      setName("");
      setDescription("");
      setCategory("5");
      setRank("0");
    }
  };

  return createPortal(
    <div className={styles.module}>
      <div ref={ref} className={styles.container}>
        <TextField
          value={isName}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          color="black"
          variant="outlined"
        />
        <TextField
          value={isDescription}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          color="black"
          variant="outlined"
        />
        <div className={styles.item}>
          <span>Category</span>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
            value={isCategory}
          >
            {Object.entries(categoryData).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.item}>
          <span>Rating</span>
          <select
            className={styles.select}
            value={isRank}
            onChange={(e) => setRank(e.target.value)}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.button}>
          <button onClick={addProductFunc}>ADD</button>
        </div>
      </div>
    </div>,
    document.body
  );
};
