import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SingUp";
import ProtectionRouter from "./components/ProtectionRouter/ProtectionRouter";
import OrganizerContent from "./components/Dashboard/content/OrganizerContent";
import AdminContent from "./components/Dashboard/content/AdminContent";
import UserContent from "./components/Dashboard/content/UserContent";
import DashboardLayout from "./layout/DashboardLayout";
import ErrorPage from "./components/Error/ErrorPage";

function AppRoutes() {
  const role = useSelector((state) => state.Auth.role);
  const location = useLocation();

  if (
    role &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />

      {role ? (
        <>
          <Route path="/login" element={<HomePage />} />
          <Route path="/signup" element={<HomePage />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route element={<ProtectionRouter allowRole="admin" />}>
              <Route path="admin" element={<AdminContent />} />
            </Route>
            <Route element={<ProtectionRouter allowRole="user" />}>
              <Route path="user" element={<UserContent />} />
            </Route>
            <Route element={<ProtectionRouter allowRole="organizer" />}>
              <Route path="organizer" element={<OrganizerContent />} />
            </Route>
          </Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingUp />} />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
