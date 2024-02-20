import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext} from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context); // Change this based on your authentication logic
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        {/* Components */}
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/write"
          element={user ? <Write /> : <Navigate to="/register" />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Navigate to="/register" />}
        />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;