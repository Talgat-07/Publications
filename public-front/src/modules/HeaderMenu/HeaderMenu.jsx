import { useState } from "react";
import { Container } from "../../ui/container/Container";
import { Module } from "../module/Module";
import styles from "./HeaderMenu.module.scss";
import { FilterProducts } from "../filterProducts/FilterProducts";

export const HeaderMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.header}>
          <h1>Products</h1>
          <FilterProducts />
          <button onClick={() => setOpen(true)}>ADD</button>
        </div>
      </Container>
      <Module isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};
