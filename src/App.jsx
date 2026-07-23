import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Navbar setShowCart={setShowCart} />
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
}

export default App;