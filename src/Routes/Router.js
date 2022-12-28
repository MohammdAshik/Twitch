import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../Context/PrivetRoute";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <Root />
      </PrivetRoute>
    ),
    children: [{}],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
