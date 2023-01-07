import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../screens/login/Login";

export default function LoginNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}