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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center">
            <div className="p-2 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-lg mr-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                运势计算
              </span>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-1 rounded-full bg-gray-50/80 px-2 py-1 shadow-inner">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
                >
                  功能介绍
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
                >
                  用户评价
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#faq"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
                >
                  常见问题
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
                >
                  价格方案
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#principles"
                  className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white hover:shadow-sm"
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
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all rounded-full px-6 shadow-md hover:shadow-lg"
            onClick={() => (window.location.href = "#calculator")}
          >
            立即计算
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="rounded-full border-gray-200 hover:bg-gray-50 hover:border-gray-300"
          >
            {isMenuOpen ? (
              <X size={20} className="text-purple-600" />
            ) : (
              <Menu size={20} className="text-purple-600" />
            )}
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
          className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg md:hidden z-50 mx-4 rounded-xl border border-gray-100"
        >
          <div className="flex flex-col p-6 space-y-3">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-600 py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
              onClick={toggleMenu}
            >
              功能介绍
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600 py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
              onClick={toggleMenu}
            >
              用户评价
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-purple-600 py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
              onClick={toggleMenu}
            >
              常见问题
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
              onClick={toggleMenu}
            >
              价格方案
            </a>
            <a
              href="#principles"
              className="text-gray-700 hover:text-purple-600 py-2.5 px-4 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all flex items-center"
              onClick={toggleMenu}
            >
              计算原理
            </a>
            <Button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all w-full mt-4 rounded-full shadow-md hover:shadow-lg"
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
