import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              运势计算
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors"
                >
                  功能介绍
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors"
                >
                  用户评价
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#faq"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors"
                >
                  常见问题
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors"
                >
                  价格方案
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#principles"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors"
                >
                  计算原理
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all"
            onClick={() => (window.location.href = "#calculator")}
          >
            立即计算
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 left-0 right-0 bg-white shadow-md md:hidden z-50"
        >
          <div className="flex flex-col p-4 space-y-3">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
              onClick={toggleMenu}
            >
              功能介绍
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
              onClick={toggleMenu}
            >
              用户评价
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
              onClick={toggleMenu}
            >
              常见问题
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
              onClick={toggleMenu}
            >
              价格方案
            </a>
            <a
              href="#principles"
              className="text-gray-700 hover:text-purple-600 py-2 text-sm font-medium"
              onClick={toggleMenu}
            >
              计算原理
            </a>
            <Button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all w-full mt-2"
              onClick={() => {
                window.location.href = "#calculator";
                toggleMenu();
              }}
            >
              立即计算
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
