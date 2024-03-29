"use client";
import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PlusSquare } from "lucide-react";
import { navLinks } from "@/data/route";
const Drawer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const desiredPath = "/" + pathSegments.slice(-1)[0];

  const handleHref = (link: string) => {
    router.push(link);
  };

  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full">
          <div className="flex-none sm:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="cursor-pointer text-ui-element-secondary hover:text-ui-text-success"
            >
              <HamburgerMenuIcon width={25} height={25} />
            </label>
          </div>
          <div className="hidden flex-none sm:block">
            <ul className="flex gap-8 md:gap-10 ">
              {/* Navbar menu content here */}
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={cn(
                    "cursor-pointer hover:font-medium hover:text-ui-text-success",
                    link.words.includes(desiredPath) &&
                      " font-medium text-ui-text-success"
                  )}
                >
                  <a
                    onClick={() => handleHref(link.path)}
                    className="flex gap-1"
                  >
                    {link.name === "新增憑證" && <PlusSquare />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 font-light">
          {/* Sidebar content here */}
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={cn(
                "cursor-pointer hover:font-medium hover:text-ui-text-success",
                link.words.includes(desiredPath) &&
                  "font-medium text-ui-text-success"
              )}
            >
              <a onClick={() => handleHref(link.path)} className="flex gap-1">
                {link.name === "新增憑證" && <PlusSquare />}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
