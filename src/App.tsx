
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';


function App() {

  return (

    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id/:name" element={<ProductDetail/>} />
    </Routes>
  </Router>
   
  )
}

export default App
