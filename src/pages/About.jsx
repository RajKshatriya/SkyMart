import React from 'react';
import { useNavigate } from 'react-router';
import { 
  Zap, 
  Package, 
  Users, 
  Star, 
  Truck, 
  ShieldCheck, 
  HeartHandshake, 
  Award,
  ArrowRight
} from 'lucide-react';

const stats = [
  { icon: Package, value: '20K+', label: 'Products' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Star, value: '4.9', label: 'Avg. Rating' },
  { icon: Truck, value: '99%', label: 'On-time Delivery' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'Every product is verified for quality and authenticity before listing.',
  },
  {
    icon: Truck,
    title: 'Speed',
    description: 'We obsess over delivery times so your orders arrive when promised.',
  },
  {
    icon: HeartHandshake,
    title: 'Community',
    description: 'Built around real customer feedback, not just business metrics.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We curate the best — no filler, no junk, just great products.',
  },
];

const team = [
  {
    initial: 'A',
    name: 'Aryan Shah',
    role: 'Founder & CEO',
    color: 'bg-[#c6f605] text-black',
  },
  {
    initial: 'P',
    name: 'Priya Mehta',
    role: 'Head of Product',
    color: 'bg-blue-500 text-white',
  },
  {
    initial: 'R',
    name: 'Rohan Verma',
    role: 'Lead Engineer',
    color: 'bg-purple-500 text-white',
  },
  {
    initial: 'S',
    name: 'Sneha Kapoor',
    role: 'Design Director',
    color: 'bg-rose-500 text-white',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen  text-white p-4 sm:p-8 lg:p-16 font-['Syne']">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-4">
          <div className="w-12 h-12 bg-[#c6f605] rounded-xl flex items-center justify-center mx-auto mb-6 text-black">
            <Zap className="w-6 h-6 fill-black" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-[#c6f605]">SkyMart</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-['DM']">
            SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-slate-800 rounded-2xl p-6 text-center space-y-2"
              >
                <Icon className="w-5 h-5 text-[#c6f605] mx-auto" />
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-['DM']">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#121212] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Our Story
          </h2>

          <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed font-['DM']">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: <em className="text-slate-200">what if shopping online was actually enjoyable?</em>
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#121212] border border-slate-800 rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="bg-[#1a2600] p-2.5 rounded-xl border border-[#3e5603] shrink-0">
                    <Icon className="w-5 h-5 text-[#c6f605]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-['DM']">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-slate-800 rounded-2xl p-6 text-center space-y-3"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto ${member.color}`}>
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-['DM']">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-[#121212] border border-[#2b3a04] rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to shop?
          </h2>
          <p className="text-slate-400 text-sm font-['DM']">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 bg-[#c6f605] hover:bg-[#b0dc00] text-black font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer font-['DM'] mt-2"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;