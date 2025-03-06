import { Link, NavLink } from "react-router-dom";

const itemNav = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Resume", path: "/resume" },
  { id: 3, title: "Work", path: "/work" },
  { id: 4, title: "Contact", path: "/contact" },
];

function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-12">
      {/* Logo */}
      <div className="flex items-center relative justify-center">
        <Link className="p-1" to="/">
          <span className="font-Lexend text-white font-normal text-6xl">
            Hesam
          </span>
          <span className="absolute bottom-1.5 -right-2 bg-[#00BFAE] rounded-full w-3 h-3"></span>
        </Link>
      </div>
      {/* Pages */}
      <div className="flex justify-center items-center">
        <ul className="flex items-center justify-center gap-6">
          {itemNav.map((item) => (
            <li
              key={item.id}
              className="text-white font-Lexend font-medium text-lg"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `p-1 hover:text-[#00BFAE] transition duration-300 cursor-pointer ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li className="text-black font-Lexend transition font-medium text-lg rounded-4xl py-2 bg-[#00BFAE] hover:bg-[#78dfd6]">
            <Link to={"/contact"} className="px-4">
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
