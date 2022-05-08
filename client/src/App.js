import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Companies from "./pages/Companies";
import Products from "./pages/Products";
import ProtectedRoute from './pages/ProtectedRoute.js'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <ProtectedRoute> 
            <Homepage /> 
          </ProtectedRoute>
          }>
          <Route path="/homepage" element={<Homepage /> } />
          <Route path="/companies" element={<Companies/>} />
          <Route path="/products" element={<Products/>} />
          </Route>
          <Route path="/register" element={<Register/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="*" element={<div>Error Page</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
