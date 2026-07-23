const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white py-8 px-4 text-center font-[Syne]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-medium text-[#c6f605] tracking-wide">
          SkyMart
        </h2>

        <p className="text-[#565656] font-[DM] text-xs sm:text-sm font-medium">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
};

export default Footer;