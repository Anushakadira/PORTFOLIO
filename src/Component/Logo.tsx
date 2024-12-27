const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-green-500 lg:text-2xl font-bold">AK</span>
      </div>
      <div className="absolute inset-0 border-4 border-e-8 border-green-500 rounded-full half-circle"></div>
    </div>
  );
};
export default Logo;