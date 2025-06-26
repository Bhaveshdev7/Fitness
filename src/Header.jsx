export default function Header() {
    return (
      <header className="fixed top-0 z-20 w-full flex items-center justify-between px-6 py-7 bg-gray-300">
        <div className="text-red-600 font-extrabold text-2xl font-orbitron">
          SPYRO
        </div>
        <nav className="space-x-8 text-purple-700 font-bold text-base font-orbitron">
          <a className="hover:underline" href="#">
            Classes
          </a>
          <a className="hover:underline" href="#">
            Team
          </a>
          <a className="hover:underline" href="#">
            About Us
          </a>
          <a className="hover:underline" href="#">
            Gallery
          </a>
        </nav>
        <button
          type="button"
          className="bg-orange-600 text-white font-bold text-md rounded-full px-7 py-2 hover:bg-white hover:text-orange-600 transition"
        >
          Contact US
        </button>
      </header>
    );
  }