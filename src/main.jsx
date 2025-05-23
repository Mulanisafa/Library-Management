import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import AllBooks from "./components/AllBooks/AllBooks";
import PrivateRouter from "./Router/PrivateRouter/PrivateRouter";
import AddBook from "./components/AddBook/AddBook";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import Category from "./components/Category/Category";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import BorrowedBooks from "./components/BorrowedBooks/BorrowedBooks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ContactUs from "./components/ContactUs/ContactUs";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import SuggestBook from "./components/SuggestBook/SuggestBook";
import FeedBack from "./components/FeedBack/FeedBack";
import ReportIssue from "./components/ReportIssue/ReportIssue";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/help-center",
        element: <HelpCenter></HelpCenter>
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>
      },
      {
        path: "/report",
        element: <ReportIssue></ReportIssue>
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/suggest-book",
        element: <PrivateRouter><SuggestBook></SuggestBook></PrivateRouter>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element: <Register></Register>
      },
      {
        path : "/books",
        element: <PrivateRouter><AllBooks></AllBooks></PrivateRouter>
      },
      {
        path : "/add-book",
        element: <PrivateRouter><AddBook></AddBook></PrivateRouter>
      },
      {
        path : "/UpdateBook",
        element: <PrivateRouter><UpdateBook></UpdateBook></PrivateRouter>
      },
      {
        path:"/category",
        element: <PrivateRouter><Category></Category></PrivateRouter>
      },
      {
        path:"/ViewDetails",
        element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>
      },
      {
        path:"/borrowed-books",
        element: <PrivateRouter><BorrowedBooks></BorrowedBooks></PrivateRouter>
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    
  </StrictMode>
);
