import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch(
            "https://paws-school-server-tanbiranjum.vercel.app/course"
          );
        },
      },
      {
        path: "/home",
        element: <Home />,
        loader: async () => {
          return fetch(
            "https://paws-school-server-tanbiranjum.vercel.app/course"
          );
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoutes>
            <Courses />
          </PrivateRoutes>
        ),
        loader: async () => {
          return fetch(
            "https://paws-school-server-tanbiranjum.vercel.app/category"
          );
        },
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoutes>
            <CourseDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://paws-school-server-tanbiranjum.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
