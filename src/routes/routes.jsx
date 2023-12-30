import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../layouts/Main/Main";
import { About } from "../pages/about/About";
import { NotFound } from "../pages/notFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "hakkimda",
        element: <About />,
      },
      {
        path: "iletisim",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
