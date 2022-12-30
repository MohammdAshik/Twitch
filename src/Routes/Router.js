import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../Context/PrivetRoute";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import NewsFeed from "../Pages/Post/NewsFeed";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <Root />
      </PrivetRoute>
    ),
    children: [
      { path: "/", element: <NewsFeed /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
