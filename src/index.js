import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./Components/error-page";
import App from "./App";
// import Applications from "./Routes/applications";
import Users from "./Components/users";
import Task from "./Components/mui/task";
import Tasks from "./Routes/tasks";
import GetTaskData from "./Components/getTaskData";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import './firebase'

const router = createBrowserRouter([

  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
  },
  {
    path: "register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
  },
  {
    path: "main",
    element: <App />,
    children: [
      {
        path: "tasks/",
        element: <Tasks />
      },
      {
        path: "tasks/:taskId",
        element: <Task />,
        loader: async ({request, params}) => {
          let data = await GetTaskData()
          console.log(data, params.taskId)
          return true
        }
      },
      {
        path: "users/",
        element: <Users />
      },
      {
        path:"clients/",
        element: '',
      }
    ]
    // loader: teamLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //* </React.StrictMode> */}
);