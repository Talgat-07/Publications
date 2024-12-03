import { createBrowserRouter, Link } from "react-router-dom";
import { PATHS } from "../constants/constants";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../layout/Layout";
import { ProductDetails } from "../pages/ProductDetails";

export const router = createBrowserRouter(
  [
    {
      path: PATHS.HOME,
      element: <Layout />,
      errorElement: (
        <div style={{ textAlign: "center", scale: "5", marginTop: "10%" }}>
          <p>404</p>
          <Link style={{ color: "brown", textDecoration: "underline" }} to="/">HOME</Link>
        </div>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: `${PATHS.DETAILS}/:id`,
          element: <ProductDetails />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
