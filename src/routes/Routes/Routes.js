import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
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
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: async () => {
          return fetch(
            "https://paws-school-server-tanbiranjum.vercel.app/category"
          );
        },
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          return fetch(
            `https://paws-school-server-tanbiranjum.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://paws-school-server-tanbiranjum.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*/*",
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
