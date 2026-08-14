"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { isNavActive, menuItems } from "@/lib/navigation";

const itemLinkClass =
  "flex items-center px-[13px] py-2 text-[15px] leading-[30px] text-[#707070] transition-colors duration-150 hover:bg-[#DC0D15] hover:text-white active:bg-[#DC0D15] active:text-white group-hover:bg-[#DC0D15] group-hover:text-white";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div id="yt_mainmenu" className="relative w-full">
      <ul
        id="meganavigator"
        className="relative z-[60] hidden list-none p-0 lg:flex lg:justify-end"
      >
        {menuItems.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <li key={item.href} className="group relative z-[1] mr-px">
              <Link
                href={item.href}
                title={item.label}
                className={`${itemLinkClass} ${active ? "bg-[#DC0D15] text-white" : ""}`}
              >
                <span className="menu-title">{item.label}</span>
                {item.children ? (
                  <FaAngleDown aria-hidden className="ml-[5px] text-[14px]" />
                ) : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-10 min-w-[220px] border-t border-[#DC0D15] border-b-[6px] border-b-[#DC0D15] bg-white/90 py-2.5 opacity-0 shadow-[0_1px_2px_1px_#ddd] transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                  <ul className="subnavi m-0 list-none p-0">
                    {item.children.map((child) => (
                      <li key={child.href} className="group/sub relative pb-px">
                        <Link
                          href={child.href}
                          title={child.label}
                          className={`relative block py-[3px] pr-3 pl-[25px] text-[14px] leading-[25px] hover:text-[#DC0D15] ${
                            pathname === child.href
                              ? "text-[#DC0D15]"
                              : "text-[#707070]"
                          }`}
                        >
                          <span
                            className={`absolute top-[11px] left-2 block size-2 rounded-full group-hover/sub:bg-[#DC0D15] ${
                              pathname === child.href
                                ? "bg-[#DC0D15]"
                                : "bg-[#b1b1b1]"
                            }`}
                          />
                          <span className="menu-title">{child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end lg:hidden">
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center text-[22px] text-[#444444]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <ul className="absolute top-full right-0 z-[70] mt-2 max-h-[70vh] w-[min(280px,calc(100vw-2rem))] list-none overflow-y-auto bg-white py-2 shadow-[0_1px_4px_rgba(0,0,0,0.2)] lg:hidden">
          {menuItems.map((item) => (
            <li key={item.href} className="border-b border-gray-100 last:border-b-0">
              <Link
                href={item.href}
                title={item.label}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-[15px] hover:bg-[#DC0D15] hover:text-white ${
                  isNavActive(pathname, item.href)
                    ? "bg-[#DC0D15] text-white"
                    : "text-[#707070]"
                }`}
              >
                {item.label}
              </Link>
              {item.children
                ? item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      title={child.label}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2 pl-8 text-[13px] hover:bg-[#DC0D15] hover:text-white ${
                        pathname === child.href
                          ? "text-[#DC0D15]"
                          : "text-[#707070]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))
                : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
