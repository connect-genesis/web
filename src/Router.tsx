import MainLayout from "./layouts/main";
import { HomePage } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { SolutionsPage } from "./pages/Solutions";
import ScrollToTop from "./components/ScrollToTop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <ScrollToTop />
        <HomePage />
      </MainLayout>
    ),
  },

  {
    path: "/solutions",
    element: (
      <MainLayout>
        <ScrollToTop />
        <SolutionsPage />
      </MainLayout>
    ),
  },
]);
