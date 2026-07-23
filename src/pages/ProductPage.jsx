import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, ShoppingCart, Star, ChevronDown } from 'lucide-react';
import { useCart } from "../context/CartContext";

export const mockProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 99.99,
    rating: 5,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: 299.99,
    rating: 4,
    reviews: 85,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: 3,
    name: 'Comfortable Cotton T-Shirt',
    category: 'Clothing',
    price: 24.99,
    rating: 4,
    reviews: 200,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80',
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 199.99,
    rating: 4,
    reviews: 65,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',
  },
  {
    id: 5,
    name: 'Stainless Steel Water Bottle',
    category: 'Home',
    price: 34.99,
    rating: 4,
    reviews: 150,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
  },
  {
    id: 6,
    name: 'Mechanical RGB Gaming Keyboard',
    category: 'Electronics',
    price: 129.99,
    rating: 5,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
  },
  {
    id: 7,
    name: 'Minimalist Leather Backpack',
    category: 'Clothing',
    price: 89.50,
    rating: 4,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
  },
  {
    id: 8,
    name: 'Modern Wooden Coffee Table',
    category: 'Furniture',
    price: 149.99,
    rating: 4,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80',
  },
  {
    id: 9,
    name: 'Aromatic Ceramic Candle',
    category: 'Home',
    price: 18.99,
    rating: 5,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80',
  },
  {
    id: 10,
    name: 'Wireless Noise-Canceling Earbuds',
    category: 'Electronics',
    price: 159.99,
    rating: 5,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
  },
  {
    id: 11,
    name: 'Classic Denim Jacket',
    category: 'Clothing',
    price: 69.99,
    rating: 4,
    reviews: 115,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80',
  },
  {
    id: 12,
    name: 'Adjustable Standing Desk',
    category: 'Furniture',
    price: 349.00,
    rating: 5,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80',
  },
  {
    id: 13,
    name: 'Electric French Press Coffee Maker',
    category: 'Home',
    price: 45.00,
    rating: 4,
    reviews: 140,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
  },
  {
    id: 14,
    name: 'Ultra-Slim HD Monitor 27"',
    category: 'Electronics',
    price: 219.99,
    rating: 4,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
  },
  {
    id: 15,
    name: 'Polarized Sunglasses',
    category: 'Clothing',
    price: 39.99,
    rating: 5,
    reviews: 260,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',
  },
  {
    id: 16,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    rating: 5,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
  },
  {
    id: 17,
    name: 'Wireless Ergonomic Gaming Mouse',
    category: 'Electronics',
    price: 59.99,
    rating: 4,
    reviews: 175,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
  },
  {
    id: 18,
    name: 'Urban Oversized Hoodie',
    category: 'Clothing',
    price: 49.99,
    rating: 4,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80',
  },
  {
    id: 19,
    name: 'Breathable Running Sneakers',
    category: 'Clothing',
    price: 119.99,
    rating: 5,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  },
  {
    id: 20,
    name: 'Scandinavian Floor Lamp',
    category: 'Furniture',
    price: 89.99,
    rating: 4,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
  },
  {
    id: 21,
    name: 'Minimalist Wall Clock',
    category: 'Home',
    price: 29.99,
    rating: 4,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80',
  },
  {
    id: 22,
    name: 'Ceramic Plant Pot Set',
    category: 'Home',
    price: 32.50,
    rating: 5,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
  },
  {
    id: 23,
    name: 'DSLR Camera Prime Lens 50mm',
    category: 'Electronics',
    price: 399.99,
    rating: 5,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&q=80',
  },
  {
    id: 24,
    name: 'Leather Minimalist Wallet',
    category: 'Clothing',
    price: 29.99,
    rating: 4,
    reviews: 190,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80',
  },
  {
    id: 25,
    name: 'Velvet Accent Armchair',
    category: 'Furniture',
    price: 249.99,
    rating: 4,
    reviews: 35,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80',
  },
  {
    id: 26,
    name: 'Air Purifier with HEPA Filter',
    category: 'Home',
    price: 129.99,
    rating: 5,
    reviews: 165,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80',
  },
  {
    id: 27,
    name: 'Smart RGB Desk Light Bar',
    category: 'Electronics',
    price: 49.99,
    rating: 4,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80',
  },
  {
    id: 28,
    name: 'Casual Canvas Tote Bag',
    category: 'Clothing',
    price: 19.99,
    rating: 4,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80',
  },
  {
    id: 29,
    name: 'Floating Wooden Bookshelf',
    category: 'Furniture',
    price: 54.99,
    rating: 4,
    reviews: 62,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80',
  },
  {
    id: 30,
    name: 'Electric Pour-Over Kettle',
    category: 'Home',
    price: 68.99,
    rating: 5,
    reviews: 205,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80',
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Featured');

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const filteredProducts = mockProducts
    .filter((product) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategoryName = product.category.toLowerCase().includes(query);
      const matchesPrice = product.price.toString().includes(query.replace('$', ''));
      const matchesGlobalSearch = matchesName || matchesCategoryName || matchesPrice;
      const matchesCategoryDropdown =
        selectedCategory === 'All Categories' ||
        product.category === selectedCategory;

      return matchesGlobalSearch && matchesCategoryDropdown;
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Highest Rated') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="w-full min-h-screen  text-white p-4 sm:p-6 lg:p-10 font-['Syne']">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
            All Products
          </h1>
          <p className="text-slate-400 text-sm font-['DM']">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        <div className="bg-[#121212] border border-slate-800 rounded-2xl p-2.5 sm:p-3 flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full text-[#616161]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#616161]" />
            <input
              type="text"
              placeholder="Search by name, category, or price..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181818] text-sm text-slate-200 placeholder-[#616161] rounded-xl pl-10 pr-4 py-2.5 outline-none border border-transparent focus:border-[#c6f605] transition-colors font-['DM']"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-40 appearance-none bg-[#181818] text-xs font-semibold text-slate-200 rounded-xl px-4 py-3 pr-8 outline-none border border-transparent cursor-pointer font-['DM']"
              >
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
                <option value="Home">Home</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative flex-1 md:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-36 appearance-none bg-[#181818] text-xs font-semibold text-slate-200 rounded-xl px-4 py-3 pr-8 outline-none border border-transparent cursor-pointer font-['DM']"
              >
                <option value="Featured">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleCardClick(product)}
                className="bg-[#121212] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all cursor-pointer"
              >
                <div className="relative bg-white p-4 flex items-center justify-center h-52 overflow-hidden">
                  <span className="absolute top-3 left-3 bg-[#555555]/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full z-10 font-['DM']">
                    {product.category}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-slate-500 font-medium font-['DM']">
                      {product.category}
                    </p>

                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 pt-1">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < product.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-500 font-['DM']">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-bold text-[#c6f605]">
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
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
        ) : (
          <div className="text-center py-20 text-slate-500 font-['DM']">
            <p className="text-lg font-semibold text-slate-300">No products found</p>
            <p className="text-sm">Try searching for a different product, category, or price point.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;