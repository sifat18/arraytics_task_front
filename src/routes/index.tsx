import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../components/UI/NotFound";
import Login from "../components/UI/Login";
import Register from "../components/UI/Register";
import { Home } from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import GetUsers from "../pages/GetUsers";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      //   {
      //     path: "/books/:id",
      //     element: <BookDetails />,
      //   },
      //   {
      //     path: "/add/book",
      //     element: (
      //       <PrivateRoute>
      //         <AddBook />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/edit-book",
      //     element: (
      //       <PrivateRoute>
      //         <Edit />
      //       </PrivateRoute>
      //     ),
      //   },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/profile",
    element: <DashBoard children={<GetUsers />} />,
    children: [
      {
        path: "/profile/all-users",
        element: <DashBoard children={<GetUsers />} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
