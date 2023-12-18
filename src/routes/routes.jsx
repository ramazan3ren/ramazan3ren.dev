import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../layouts/Main/Main";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
