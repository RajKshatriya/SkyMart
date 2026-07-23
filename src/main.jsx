import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import { ClickSpark } from './effects/Click';
import { ToastContainer } from 'react-toastify';

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