import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../components/UI/NotFound";
import Login from "../components/UI/Login";
import Register from "../components/UI/Register";
import { Home } from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import GetUsers from "../pages/GetUsers";
import CreateItem from "../pages/CreateItem";
import GetItems from "../pages/GetItems";
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
    element: <DashBoard />,
    children: [
      //   {
      //     path: "/profile",
      //     element: (
      //       <DashBoard>
      //         <GetUsers />
      //       </DashBoard>
      //     ),
      //   },
      {
        path: "/profile/all_users",
        element: <GetUsers />,
      },
      {
        path: "/profile/all_items",
        element: <GetItems />,
      },
      {
        path: "/profile/create_item",
        element: <CreateItem />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
