import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Component/AuthContext';
import LayOut from './Component/LayOut';
import Home from './Component/Home';
import Products from './Component/Products';
import Services from './Component/Services';
import SignIn from './Component/SignIn';
import Register from './Component/Register';
import About from './Component/About';
import Contact from './Component/Contact';
import ProductDetail from './Component/ProductDetail';
import Cart from './Component/Cart';

import './App.css'
import Payment from './Component/Payment';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route index element={<Home />} />
            
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="payment" element={<Payment />} />
          </Route>

          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
