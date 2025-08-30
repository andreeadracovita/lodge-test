import { Routes, Route, Link } from "react-router-dom";

import AuthProvider from "components/security/AuthContext";

import RequireAuth from "components/security/RequireAuth";

import Home from "pages/Home";
import Secret from "pages/Secret";
import NoMatch from "pages/NoMatch";

import "./App.css";

export default function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/secret">Secret</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/secret" element={<RequireAuth><Secret /></RequireAuth>} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
