import React, { useState, useContext } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const SignUpPage = () => {

  const { registeredUsers, setRegisteredUsers } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    let arr = [...registeredUsers, data]
    
    setRegisteredUsers(arr);
    toast.success("User registered successfully");
    localStorage.setItem('registeredUsers', JSON.stringify(arr));
    reset();
  };

  const password = watch('password');

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-center p-4 font-['Syne']">
      
      <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight mb-8">
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

      <div className="w-full max-w-md backdrop-blur-lg border border-[#292929] rounded-3xl p-8 space-y-6 shadow-2xl">
        <div className="space-y-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-white">Create account</h2>
          <p className="text-sm font-semibold text-[#6e6e6e] font-[DM]">
            Join SkyMart and start shopping
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4 font-['DM']">
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6e6e6e]" />
            <input
              {...register('fullName', {
                required: 'Please enter your name',
                minLength: { value: 3, message: 'Name must be at least 3 characters' },
              })}
              type="text"
              placeholder="Full name"
              className="w-full backdrop-blur-lg border border-[#292929] text-sm text-slate-200 placeholder-[#6e6e6e] rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#c8f400] transition-colors"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6e6e6e]" />
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
              className="w-full backdrop-blur-lg border border-[#292929] text-sm text-slate-200 placeholder-[#6e6e6e] rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#c8f400] transition-colors"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6e6e6e]" />
            <input
              {...register('password', {
                required: 'Please enter your password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (min 6 chars)"
              className="w-full backdrop-blur-lg border border-[#292929] text-sm text-slate-200 placeholder-[#6e6e6e] rounded-xl pl-10 pr-10 py-3 outline-none focus:border-[#c8f400] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6e6e6e] hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6e6e6e]" />
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (val) => val === password || 'Passwords do not match',
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              className="w-full backdrop-blur-lg border border-[#292929] text-sm text-slate-200 placeholder-[#6e6e6e] rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#c8f400] transition-colors"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#c8f400] hover:bg-[#b0dc00] text-black font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-['Syne'] mt-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 font-[DM]">
          <p className="text-sm font-semibold text-[#6e6e6e]">
            Already have an account?{' '}
            <Link to="/" className="text-[#c8f400] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;