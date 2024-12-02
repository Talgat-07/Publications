import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/constants";
import { HomePage } from "../pages/HomePage";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter(
  [
    {
      path: PATHS.HOME,
      element: <Layout />,
      errorElement: <div>404</div>,
      children: [
        {
          index: true,
          element: <HomePage />,
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
