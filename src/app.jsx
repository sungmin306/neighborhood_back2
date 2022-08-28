import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import DelivBoard from "./pages/DelivBoard";
import DelivRegister from "./pages/DelivRegister";
import StartPage from "./pages/StartPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/delivRegister" element={<DelivRegister />} />
          <Route path="/delivBoard" element={<DelivBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;