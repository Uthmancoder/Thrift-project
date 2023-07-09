import "./App.css";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Groups from "./Components/Groups";
import Account from "./Components/Account";
import Messages from "./Components/Messages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/messages" element={<Messages/>} />
      </Routes>
    </div>
  );
}

export default App;
