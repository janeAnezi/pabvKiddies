import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayOut from './Component/LayOut';
import Home from './Component/Home';
import Products from './Component/Products';
import Services from './Component/Services';
import LogIn from './Component/LogIn';
import Register from './Component/Register';
import About from './Component/About';
import Contact from './Component/Contact';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
