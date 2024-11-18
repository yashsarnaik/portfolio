"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex items-center justify-between mx-auto px-[10px]">
          {/* Logo Section */}
          <Link
            href="#about-me"
            className="h-auto w-auto flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer hover:animate-slowspin"
            />
            <div className="font-bold ml-2 hidden sm:block text-gray-300">
              Yash Sarnaik
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex w-full max-w-[500px] h-full items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
                >
                  {link.title}
                </Link>
              ))}

              {/* Source Code Link */}
              <Link
                href={LINKS.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                Source Code
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-row gap-3 md:gap-5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu with Enhanced Background */}
        {isMenuOpen && (
          <>
            {/* Overlay behind the menu */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="sm:hidden absolute top-[65px] left-0 w-full bg-[#0D001A]/95 backdrop-blur-md shadow-lg shadow-purple-500/20 border-t border-purple-500/20 z-50">
              <ul className="flex flex-col items-center gap-6 py-8 text-gray-200">
                {NAV_LINKS.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.link}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium cursor-pointer hover:text-[rgb(112,66,248)] transition"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}

                {/* Source Code Link */}
                <li>
                  <Link
                    href={LINKS.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium cursor-pointer hover:text-[rgb(112,66,248)] transition"
                  >
                    Source Code
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};