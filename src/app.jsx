import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import DelivRegister from './pages/DelivRegister';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/delivRegister" element={<DelivRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
