import { categoryData } from "../../constants/constants";

export const CategoryRevive = ({ category }) => {
  if (category > 5 || category < 0) {
    return null;
  }
  return <div>{categoryData[category]}</div>;
};
