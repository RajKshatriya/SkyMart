import { Link } from 'react-router';
import { ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, Zap, ShieldCheck, Tag as PriceTag } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const categories = [
  { id: 1, name: 'Electronics', count: 17, icon: '💻' },
  { id: 2, name: 'Clothing', count: 2, icon: '📦' },
  { id: 3, name: 'Furniture', count: 3, icon: '📦' },
  { id: 4, name: 'Home', count: 14, icon: '📦' },
  { id: 5, name: 'Sports', count: 8, icon: '📦' },
  { id: 6, name: 'Accessories', count: 6, icon: '📦' },
];
const topRatedProducts = [
  { id: 101, name: 'Chocolate Cake', price: '$599.99', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&q=80' },
  { id: 102, name: 'Armchair', price: '$199.99', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&q=80' },
  { id: 103, name: 'Desktop Monitor', price: '$349.99', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&q=80' },
  { id: 104, name: 'Black Board', price: '$49.99', image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=100&q=80' },
  { id: 105, name: 'Mechanical Keyboard', price: '$149.99', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&q=80' },
];
const newArrivalsProducts = [
  { id: 201, name: 'Yellow Headphones', price: '$99.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80' },
  { id: 202, name: 'Smartwatch', price: '$299.99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80' },
  { id: 203, name: 'White T-Shirt', price: '$24.99', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&q=80' },
  { id: 204, name: 'Yellow Chair', price: '$199.99', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&q=80' },
  { id: 205, name: 'Green Bottle', price: '$34.99', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&q=80' },
];

const Home = () => {
  let { loggedInUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 lg:p-10 font-[Syne]">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white bg-transparent p-5 sm:p-8 lg:p-12">

          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div className="max-w-xl space-y-4">
              <div className="flex items-center font-[DM] gap-2 text-xs font-light uppercase tracking-wider text-[#c6f605]">
                <span>GOOD EVENING</span>
                <span className="text-base">👋</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Welcome back, <br />
                <span className="text-[#c6f605]">{loggedInUser?.fullName || "User"}!</span>
              </h1>
              <p className="text-[#707070] text-sm md:text-base leading-relaxed pt-2">
                Discover today's picks — hand-curated products across electronics, fashion, and more.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/main/products"
                  className="inline-flex items-center gap-2 bg-[#c6f605] text-black font-semibold px-6 py-3 rounded-2xl hover:bg-[#b0dc00] transition-all text-sm"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/main/products"
                  className="inline-flex bg-transparent items-center text-[#b8b8b8] border border-[#262626] hover:text-white hover:border-[#445119] font-medium px-5 py-3 rounded-2xl transition-all text-sm"
                >
                  View All Products
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto min-w-[180px]">

              <div className="flex-1 bg-[#18220a] border border-[#445119] rounded-2xl p-5 text-center">
                <span className="block text-2xl font-black text-[#c6f605]">20+</span>
                <span className="text-xs text-slate-400 font-medium">Products Available</span>
              </div>

              <div className="flex-1 bg-transparent border border-white rounded-2xl p-5 text-center">
                <span className="block text-2xl font-bold text-white">Free</span>
                <span className="text-xs text-[#707070] font-medium">Delivery on ₹999+</span>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="flex items-center gap-4 border border-white p-5 rounded-2xl">
            <div className="p-3 rounded-xl bg-slate-900 text-[#c6f605] border border-slate-800">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">0</div>
              <div className="text-xs font-medium text-slate-300">Cart Items</div>
              <div className="text-[11px] text-[#707070]">In your bag</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-white  p-5 rounded-2xl">
            <div className="p-3 rounded-xl bg-slate-900 text-blue-400 border border-slate-800">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">$0.00</div>
              <div className="text-xs font-medium text-slate-300">Cart Value</div>
              <div className="text-[11px] text-[#707070]">Ready to checkout</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-white p-5 rounded-2xl">
            <div className="p-3 rounded-xl  text-amber-400 ">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">5</div>
              <div className="text-xs font-medium text-slate-300">Top Products</div>
              <div className="text-[11px] text-[#707070]">Highly rated</div>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-white p-5 rounded-2xl">
            <div className="p-3 rounded-xl bg-slate-900 text-purple-400 border border-slate-800">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">6</div>
              <div className="text-xs font-medium text-slate-300">Categories</div>
              <div className="text-[11px] text-[#707070]">To explore</div>
            </div>
          </div>
        </div>

        <section className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Syne]">
              Shop by Category
            </h2>
            <Link
              to="/main/products"
              className="flex items-center gap-1.5 text-sm font-medium text-[#c6f605] hover:text-[#b0dc00] transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/main/products?category=${category.name.toLowerCase()}`}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3" aria-hidden="true">
                  {category.icon}
                </div>
                <h3 className="text-slate-900 font-medium text-base sm:text-lg mb-1 font-[DM]">
                  {category.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium font-[DM]">
                  {category.count} items
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">

          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <h3 className="text-xl sm:text-2xl font-bold font-[Syne]">Top Rated</h3>
                </div>
                <Link to="/main/products?sort=top-rated" className="text-xs font-semibold text-[#a3cb00] flex items-center gap-0.5 hover:underline">
                  See all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-3">
                {topRatedProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between border border-slate-100 rounded-2xl p-3 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-bold text-[#c6f605] text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {product.price}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-xl bg-[#f7ffe5] text-[#81a100] border border-[#e2fa8a] flex items-center justify-center hover:bg-[#c6f605] hover:text-black transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#c6f605] fill-[#c6f605]" />
                  <h3 className="text-xl sm:text-2xl font-bold font-[Syne]">New Arrivals</h3>
                </div>
                <Link to="/main/products?sort=newest" className="text-xs font-semibold text-[#a3cb00] flex items-center gap-0.5 hover:underline">
                  See all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-3">
                {newArrivalsProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between border border-slate-100 rounded-2xl p-3 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-bold text-[#c6f605] text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {product.price}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-xl bg-[#f7ffe5] text-[#81a100] border border-[#e2fa8a] flex items-center justify-center hover:bg-[#c6f605] hover:text-black transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

          <div className="flex items-center gap-4 border border-white bg-[#121212] p-6 rounded-2xl">
            <Zap className="w-6 h-6 text-[#c6f605] flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Fast Delivery</h4>
              <p className="text-xs text-slate-500 font-medium">Same-day on select items</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-white bg-[#121212] p-6 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Secure Payments</h4>
              <p className="text-xs text-slate-500 font-medium">100% encrypted checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-white bg-[#121212] p-6 rounded-2xl">
            <PriceTag className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Best Prices</h4>
              <p className="text-xs text-slate-500 font-medium">Price-match guarantee</p>
            </div>
          </div>

        </section>


      </div>
    </div>
  );
};

export default Home;