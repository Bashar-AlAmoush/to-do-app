import React, { useEffect } from "react";
import "./DarkMode.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Sidebar from "./Layout/Sidebar";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="flex bg-white ">
      <Router>
        <div className="col-span-3 sticky top-0 h-screen">
          <Sidebar />
        </div>
        <div className="w-screen">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
