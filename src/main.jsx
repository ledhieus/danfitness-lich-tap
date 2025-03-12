import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./components/RootLayout.jsx";
import DetailProgram from "./pages/DetailProgram.jsx";
import DetailSession from "./pages/DetailSession.jsx";
import Calculator from "./components/Calculator.jsx";
import ModelProvider from "./context/ModelProvider.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PlanPage from "./pages/PlanPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import NotFound from "./pages/NotFound.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chi-tiet/:slug",
        element: <DetailProgram />,
      },
      {
        path: "/chi-tiet/buoi-tap/:id",
        element: <DetailSession />,
      },
      {
        path: "/tinh-tdee",
        element: <Calculator />,
      },
      {
        path: "/dang-nhap",
        element: <LoginPage />,
      },
      {
        path: "/giao-an",
        element: <PlanPage />,
      },
      {
        path: "/dang-ky-giao-an",
        element: <PaymentPage />,
      },
      {
        path: "/tai-khoan",
        element: <AccountPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ModelProvider>
      <RouterProvider router={router} />
    </ModelProvider>
  </Provider>
);
