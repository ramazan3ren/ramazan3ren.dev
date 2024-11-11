import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../layouts/Main/Main";
import { About } from "../pages/about/About";
import { NotFound } from "../pages/notFound/NotFound";
import { Contact } from "../pages/contact/Contact";
import { Portfolio } from "../pages/portfolio/Portfolio";
import { Blog } from "../pages/blog/Blog";
import ScrollToTop from "./ScrollToTop";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    ),
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
        path: "blog",
        element: <Blog />,
      },
      {
        path: "iletisim",
        element: <Contact />,
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
