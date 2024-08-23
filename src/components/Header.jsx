import Nav from "./Nav";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <header className="top-0 z-20 mx-auto w-full flex items-center justify-between">
      <div className="flex flex-col items-center w-full bg-gradient-to-r from-white via-stone-200 via-50% to-white border-b border-gray-500">
        <div className="bg-white p-2 border-b w-full border-gray-500">
          <a href="/" className="text-xl font-bold font-serif">
            <h1 className="text-5xl">Newster</h1>
          </a>
          <h3 className="text-base font-sans">Bagpiping fact into News</h3>
        </div>

        <Nav className="border-t border-gray-500" />
      </div>
    </header>
  );
};

export default Header;
