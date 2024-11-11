import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionnairePage from "./pages/QuestionnairePage";
import SummaryPage from "./pages/SummaryPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./routes/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<QuestionnairePage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/summary" element={<SummaryPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
