import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white h-[60px] px-6 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="text-lg font-bold cursor-pointer">MyBook</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <FiMenu size={24} className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-800 text-white">
            <SheetHeader>
              <SheetTitle className="text-xl font-semibold flex items-center justify-between">
                Menu <IoMdClose size={24} className="cursor-pointer" />
              </SheetTitle>
            </SheetHeader>

            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="block text-lg hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block text-lg hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="block text-lg hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="block text-lg hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
