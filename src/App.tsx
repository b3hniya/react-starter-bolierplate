import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "@/presentation/Login/pages/Login";
import AppLayout from "@/presentation/layout/App.layout";
import MainPage from "@/presentation/Dashboard/pages/MainPage";
import AuthLayout from "./presentation/layout/Auth.layout";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/app/dashboard");
  });

  return (
    <>
      <Routes>
        <Route path="/app">
          <Route
            path="/app/dashboard"
            element={
              <AppLayout>
                <MainPage />
              </AppLayout>
            }
          />
        </Route>

        <Route path="/auth">
          <Route
            path="/auth/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
