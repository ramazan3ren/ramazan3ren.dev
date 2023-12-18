import "../src/style.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./context/context";
import routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("body")).render(
  <Provider>
    <RouterProvider router={routes} />
  </Provider>
);
