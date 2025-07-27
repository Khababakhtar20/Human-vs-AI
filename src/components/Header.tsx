import React from "react";
import { Palette, Github, ArrowRight, Gamepad2 } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: "home" | "draw" | "text" | "vote" | "gallery" | "games") => void;
}

const navLinks = [
  { name: "Home", page: "home" },
  { name: "Drawing", page: "draw" },
  { name: "Text", page: "text" },
  { name: "Vote", page: "vote" },
  { name: "Gallery", page: "gallery" },
  { name: "Games", page: "games", icon: Gamepad2 },
  { name: "How It Works", page: "home" }, // You can update this if you have a separate page for How It Works
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full">
      {/* Main Nav */}
      <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-3">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <Palette className="w-7 h-7 text-purple-700" />
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Emotions, not just algorithm.
          </span>
        </div>
        {/* Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page as any)}
                className="text-base font-semibold text-gray-800 hover:text-purple-700 transition-colors focus:outline-none bg-transparent border-none flex items-center gap-2"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.name}
              </button>
            ))}
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-500 transition-all"
          >
            <Github className="w-5 h-5 mr-2" /> GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
