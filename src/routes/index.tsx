import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../components/UI/NotFound";
import Login from "../components/UI/Login";
import Register from "../components/UI/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "/books",
      //     element: <Books />,
      //   },
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
    path: "*",
    element: <NotFound />,
  },
]);
