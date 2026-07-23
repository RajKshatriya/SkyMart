import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const { loggedInUser, setLoggedInUser, registeredUsers } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log('Login attempt:', data);
    let user = registeredUsers.find((user) => user.email === data.email && user.password === data.password);

    if (!user) {
      toast.error("Invalid credentials");
      reset();
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("LoggedInUser", JSON.stringify(user));
    toast.success(" logged in successfully");
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen w-full text-white flex flex-col lg:flex-row font-['Syne']">
      <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#292929]">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
          <div className="bg-[#c8f400] p-2 rounded-xl text-[#0e0e0e] flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#0e0e0e"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <span>
            Sky<span className="text-[#c8f400]">Mart</span>
          </span>
        </Link>

        <div className="my-12 lg:my-0 space-y-6 max-w-lg">
          <p className="text-[#c8f400] text-xs uppercase font-bold tracking-widest font-['DM']">
            Welcome Back
          </p>
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Shop the future. <br />
            <span className="text-[#c8f400]">Today.</span>
          </h1>
          <p className="text-[#616161] text-md sm:text-base font-['DM'] font-semibold leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mt-[-6rem] mb-28">
          <div className="backdrop-blur-lg border border-white rounded-2xl px-6 py-4 text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#c8f400]">20K+</p>
            <p className="text-[11px] text-slate-400 font-['DM'] mt-0.5">Products</p>
          </div>
          <div className="backdrop-blur-lg border border-white rounded-2xl px-6 py-4 text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#c8f400]">50K+</p>
            <p className="text-[11px] text-slate-400 font-['DM'] mt-0.5">Users</p>
          </div>
          <div className="backdrop-blur-lg border border-white rounded-2xl px-6 py-4 text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#c8f400]">4.9★</p>
            <p className="text-[11px] text-slate-400 font-['DM'] mt-0.5">Rating</p>
          </div>
        </div>
      </div>


      <div className="lg:w-1/2 p-6 sm:p-12 flex items-center justify-center ">
        <div className="w-full max-w-md backdrop-blur-lg border border-[#292929] rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-white">Sign in</h2>
            <p className="text-xs text-[#707070] font-['DM']">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-4 font-['DM']">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
              <input
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-[#181818] border border-[#292929] text-sm text-slate-200 placeholder-[#707070] rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#c8f400] transition-colors"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
              <input
                {...register('password', {
                  required: 'Please enter your password',
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password (min 6 chars)"
                className="w-full bg-[#181818] border border-[#292929] text-sm text-slate-200 placeholder-[#6e6e6e] rounded-xl pl-10 pr-10 py-3 outline-none focus:border-[#c8f400] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#c8f400] hover:bg-[#b0dc00] text-black font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-['Syne'] mt-2"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center pt-2 font-['DM']">
            <p className="text-xs text-[#707070]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#c8f400] font-semibold hover:underline cursor-pointer">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;