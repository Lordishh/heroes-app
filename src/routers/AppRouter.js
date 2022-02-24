import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes>
            <LoginScreen />
          </PublicRoutes>
        }
        />
        {/* <Route path="/login" element={<LoginScreen />} /> */}

        <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
