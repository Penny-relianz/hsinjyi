"use client";
import Drawer from "./drawer";

const Navbar = () => {
  return (
    <div className="wide-navbar navbar-fixed flex h-16 items-center justify-between bg-nav-bg px-4">
      <picture>
        <img
          src="/next.svg"
          alt="logo"
          width={140}
          className="mb-2"
          fetchPriority="high"
        />
      </picture>
      <div>
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
