import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SingUp";
import ProtectionRouter from "./components/ProtectionRouter/ProtectionRouter";
import OrganizerContent from "./components/Dashboard/content/OrganizerContent";
import AdminContent from "./components/Dashboard/content/AdminContent";
import UserContent from "./components/Dashboard/content/UserContent";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingUp />} />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
