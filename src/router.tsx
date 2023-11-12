import {DefaultLayout} from "@/layout";
import {createBrowserRouter} from "react-router-dom";
import {BrowserPage, HomePage} from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/browse/*',
        element: <BrowserPage />
      }
    ]
  },
]);
export default router;
