import { NavLink } from "react-router";

function Header() {
  return (
    <div className="p-6 w-full top-0 sticky bg-emerald-950 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Navigation Menu */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-10">
            <NavLink
              to="/"
              className="font-[Quicksand] text-lg font-medium tracking-widest text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className="font-[Quicksand] text-lg font-medium tracking-widest text-white "
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className="font-[Quicksand] text-lg font-medium tracking-widest text-white "
            >
              Contact
            </NavLink>
            <NavLink
              to="/forum"
              className="font-[Quicksand] text-lg font-medium tracking-widest text-white "
            >
              Forum
            </NavLink>
          </ul>
        </nav>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center flex-1 mb-4 md:mb-0">
          <p className="text-4xl font-light font-[Jost] tracking-widest text-white">
            daily
          </p>
          <p className="text-4xl font-light font-[Jost] tracking-widest text-white">
            drafts.
          </p>
        </div>

        <div>
          <NavLink
            to="/Register"
            className="btn"
          >
            Join Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
