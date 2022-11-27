import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { SolutionsPage } from "./pages/Solutions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/solutions",
    element: (
      <MainLayout>
        <SolutionsPage />
      </MainLayout>
    ),
  },
]);
