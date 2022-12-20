import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/Admin/Client/Client";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import RecruiterPage from "./pages/Admin/Recruiter/Recuirter";
import ClientHomePage from "./pages/client/client";
import Login from "./pages/login/Login";
import RecruiterHomePage from "./pages/recruiter/recruiter";
// import Login from './pages/login'
import Signup from './pages/signup/Signup'

const currentUser = JSON.parse(localStorage.getItem('user'))
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="admin_dashboard" element={<AdminDashboard />} />
        <Route path="admin_client" element={<ClientPage />} />
        <Route path="admin_recruiter" element={<RecruiterPage />} />
        <Route path="recruiter_home" element={<RecruiterHomePage />} />
        <Route path="client_home" element={<ClientHomePage />} />





      </Routes>
    </Router>
  );
}

export default App;
