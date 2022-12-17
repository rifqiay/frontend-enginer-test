import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Shopping from "./pages/shopping/Shopping";
import Store from "./pages/store/Store";
import Auth from "./components/base/auth/AuthLogin";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route
          path="/home"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-cart" element={<Shopping />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
