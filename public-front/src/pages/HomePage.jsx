import { HeaderMenu } from "../modules/HeaderMenu/HeaderMenu";
import { ProductsList } from "../modules/ProductsList/ProductsList";
import { Container } from "../ui/container/Container";

export const HomePage = () => {
  return (
    <div>
      <HeaderMenu />
      <Container>
        <ProductsList />
      </Container>
    </div>
  );
};
