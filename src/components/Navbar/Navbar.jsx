import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="my-12">
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-[#150b2b] p-0 text-2xl lg:text-[2rem]">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center lg:flex hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:self-auto self-center">
          <div className="flex items-center gap-4">
            <div className="items-center justify-center gap-2 bg-[#150b2b0c] py-3 px-6 rounded-full hidden md:flex">
              <span className="text-xl text-[#150b2bb3]">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent placeholder:text-[#150b2bb3] outline-none"
              />
            </div>

            <button className="rounded-full bg-[#0be58a] md:p-3 p-2.5 ">
              <span className=" text-2xl">
                <RxAvatar />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
