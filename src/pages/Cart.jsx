import React from 'react';
import { ShoppingBag, X, Package, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext'; 

const Cart = ({ isOpen, onClose, onBrowseClick }) => {
  if (!isOpen) return null;

  const { cart: cartItems = [], updateQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-[100] font-['Syne']">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-[#121212] text-white flex flex-col shadow-2xl">
        
        <div className="p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#1f290d] border border-[#3e5603] p-2 rounded-xl text-[#c6f605]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Cart</h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-[#181818] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-[#181818] border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
                <Package className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Cart is empty
                </h3>
                <p className="text-xs text-slate-400 font-['DM']">
                  Go shop something cool!
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onBrowseClick) onBrowseClick();
                }}
                className="bg-[#c6f605] hover:bg-[#b0dc00] text-black font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer font-['DM'] mt-2"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181818] border border-slate-800/80 rounded-2xl p-4 flex gap-4 items-center"
                >
                  <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#c6f605] font-bold">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex items-center border border-slate-800 rounded-lg bg-[#121212] font-['DM']">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-800 bg-[#121212] space-y-4 shrink-0">
            <div className="space-y-2 font-['DM']">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Shipping</span>
                <span className="text-[#c6f605]">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800 font-['Syne']">
                <span>Total</span>
                <span className="text-[#c6f605]">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-[#c6f605] hover:bg-[#b0dc00] text-black font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-['DM']">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;