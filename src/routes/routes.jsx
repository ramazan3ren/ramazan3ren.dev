import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../layouts/Main/Main";
import { About } from "../pages/about/About";
import { NotFound } from "../pages/notFound/NotFound";
import { Contact } from "../pages/contact/Contact";
import { Services } from "../pages/services/Services";
import { Portfolio } from "../pages/portfolio/Portfolio";

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
        element: <Contact />,
      },
      {
        path: "hizmetler",
        element: <Services />,
      },
      {
        path: "portfolyo",
        element: <Portfolio />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
