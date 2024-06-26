import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-20 mx-auto w-full flex items-center justify-between border-b border-gray-500 p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-bold">Newster</h1>
        <h2 className="text-base">your own news</h2>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
