import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';

import { mockProducts } from './ProductPage';
const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const currentId = Number(id);
  const currentIndex = mockProducts.findIndex((p) => p.id === currentId);

  const product =
    location.state?.product ||
    (currentIndex !== -1 ? mockProducts[currentIndex] : mockProducts[0]);

  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  const handleNextProduct = () => {
    const nextIndex = (currentIndex + 1) % mockProducts.length;
    const nextProduct = mockProducts[nextIndex];
    navigate(`/product/${nextProduct.id}`, { state: { product: nextProduct } });
  };

  const handlePrevProduct = () => {
    const prevIndex = (currentIndex - 1 + mockProducts.length) % mockProducts.length;
    const prevProduct = mockProducts[prevIndex];
    navigate(`/product/${prevProduct.id}`, { state: { product: prevProduct } });
  };

  const handleProductSelect = (selectedProduct) => {
    navigate(`/product/${selectedProduct.id}`, { state: { product: selectedProduct } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-12 font-['Syne'] space-y-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/products')} 
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer font-['DM']"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevProduct}
              className="flex items-center gap-1 bg-[#121212] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all cursor-pointer font-['DM']"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            <button
              onClick={handleNextProduct}
              className="flex items-center gap-1 bg-[#121212] border border-slate-800 hover:border-slate-700 text-[#c6f605] hover:bg-[#181818] text-xs font-semibold px-3 py-2 rounded-xl transition-all cursor-pointer font-['DM']"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Product Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#121212] border border-slate-800 rounded-3xl p-6 sm:p-10">
          
          {/* Image Box */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 flex items-center justify-center min-h-[350px] sm:min-h-[420px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[340px] w-auto object-contain"
            />
          </div>

          {/* Product Meta */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block bg-[#1f290d] text-[#c6f605] border border-[#3e5603] text-xs font-semibold px-3 py-1 rounded-full font-['DM'] mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 font-['DM']">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-200">
                {product.rating}
              </span>
              <span className="text-sm text-slate-500">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-3xl font-black text-[#c6f605]">
              ${product.price ? product.price.toFixed(2) : '0.00'}
            </div>

            {/* Dynamic Description */}
            <p className="text-slate-400 text-sm leading-relaxed font-['DM']">
              {product.description ||
                `Experience high-end quality and premium performance with the ${product.name}. Designed to seamlessly integrate into your daily workflow with durability in mind.`}
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 bg-[#c6f605] hover:bg-[#b0dc00] text-black font-bold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer font-['DM']">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className="bg-[#181818] border border-slate-800 hover:border-slate-700 p-3.5 rounded-2xl transition-colors cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'
                  }`}
                />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="text-center space-y-1">
                <Truck className="w-4 h-4 text-[#c6f605] mx-auto" />
                <p className="text-xs font-bold text-slate-200">Free Delivery</p>
              </div>

              <div className="text-center space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#c6f605] mx-auto" />
                <p className="text-xs font-bold text-slate-200">2-Year Warranty</p>
              </div>

              <div className="text-center space-y-1">
                <RotateCcw className="w-4 h-4 text-[#c6f605] mx-auto" />
                <p className="text-xs font-bold text-slate-200">30-Day Returns</p>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => handleProductSelect(relProduct)}
                  className="bg-[#121212] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all cursor-pointer"
                >
                  <div className="relative bg-white p-4 flex items-center justify-center h-48 overflow-hidden">
                    <span className="absolute top-3 left-3 bg-[#555555]/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full z-10 font-['DM']">
                      {relProduct.category}
                    </span>

                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                    <div className="space-y-1.5">
                      <p className="text-[11px] text-slate-500 font-medium font-['DM']">
                        {relProduct.category}
                      </p>

                      <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                        {relProduct.name}
                      </h3>

                      <div className="flex items-center gap-1 pt-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(relProduct.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-500 font-['DM']">
                          ({relProduct.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-base font-bold text-[#c6f605]">
                        ${relProduct.price.toFixed(2)}
                      </span>

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 bg-[#c6f605] text-black text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-[#b0dc00] transition-colors cursor-pointer font-['DM']"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Quick Navigation Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 font-['DM']">
          <button
            onClick={handlePrevProduct}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Product
          </button>

          <button
            onClick={handleNextProduct}
            className="flex items-center gap-2 text-sm text-[#c6f605] hover:underline transition-all cursor-pointer font-semibold"
          >
            Next Product
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;