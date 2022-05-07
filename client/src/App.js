import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="*" element={<div>Error Page</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
