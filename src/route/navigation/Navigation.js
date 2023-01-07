import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../screens/home/Home'
import Detail from '../../screens/detail/Detail'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}