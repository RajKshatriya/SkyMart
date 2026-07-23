import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Cart from '../pages/Cart';
import Footer from '../components/Footer';
import HomeBg from '../effects/HomeBg'
import Click from '../effects/Click'

export const HomePageLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  return (
    <HomeBg className="z-0">
      <Click>
        <div className="min-h-screen bg-transparent text-white ">
          <Navbar setShowCart={setShowCart} />
          <main>
            <Outlet />
          </main>
          <Cart
            isOpen={showCart}
            onClose={() => setShowCart(false)}
            onBrowseClick={() => navigate('/main/products')}
          />
          <Footer />
        </div>
      </Click>
    </HomeBg>
  );
};