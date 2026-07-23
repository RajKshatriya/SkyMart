import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes/AppRoutes'; 
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import './index.css';
import {ClickSpark} from './Effects/Click';
import {ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CartProvider>
    <AuthProvider>
      <ClickSpark>
        <AppRoutes />
        <ToastContainer />
      </ClickSpark>
    </AuthProvider>
  </CartProvider>
);