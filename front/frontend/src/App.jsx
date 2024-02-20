import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const currentUser = false; // Change this based on your authentication logic

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        {/* Components */}
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// function App() {
//   const currentUser = true;
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Componentes */}
//         <Route element= {<Topbar />} /> 
//         <Route path= '/' element= {<Homepage />} />
//         <Route path="/posts" element= {<Homepage />} />
//         <Route path="/register">{currentUser ? <Redirect to="/" /> : <Register />} </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id" element= {<Single />} />
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;