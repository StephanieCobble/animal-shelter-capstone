// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdoptionFormPage from "./pages/AdoptionFormPage/AdoptionFormPage";
import AdoptPage from "./pages/AdoptPage/AdoptPage";
import LostPetsPage from "./pages/LostPetsPage/LostPetsPage";
import SearchAdoptPage from "./pages/AdoptPage/SearchAdoptPage";
import SearchLostPetsPage from "./pages/LostPetsPage/SearchLostPetsPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import EmployeeAccountPage from "./pages/AccountPage/EmployeeAccountPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/lost" element={<LostPetsPage />} />
        <Route path="/adoptsearch" element={<SearchAdoptPage />} />
        <Route path="/lostsearch" element={<SearchLostPetsPage />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/empaccount"
          element={
            <PrivateRoute>
              <EmployeeAccountPage />
            </PrivateRoute>
          }
        />
        {/* <Route path="/form" element={<PrivateRoute><AdoptionFormPage /></PrivateRoute>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
