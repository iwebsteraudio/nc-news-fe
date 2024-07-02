import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-20 mx-auto w-full flex items-center justify-between border-b border-gray-500 p-8">
      <div className="flex flex-col items-start">
        <a href="/" className="text-xl font-bold font-serif">
        <h1>Newster</h1>
        </a>
        <h2 className="text-base font-sans">get your own news</h2>
      </div>
        <ToggleTheme className="justify-end"/>
    </header>
  );
};

export default Header;
