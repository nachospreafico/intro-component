const Header = () => {
  return (
    <header className="z-10 flex flex-col gap-4 px-6  md:justify-center md:items-center">
      <h1 className="text-center md:text-left text-[28px] md:text-[39px] lg:text-[50px] text-white font-bold leading-[36px] md:leading-[45px] lg:leading-[55px]">
        Learn to code by watching others
      </h1>
      <p className="text-white text-[16px] text-center leading-[26px] font-medium md:text-left">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </header>
  );
};

export default Header;
