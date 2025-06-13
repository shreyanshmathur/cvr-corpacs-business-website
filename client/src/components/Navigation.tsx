import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Building2, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold font-heading text-gray-900">CVR Corpacs</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919326357129"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              +91 9326357129
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-red-600"
            onClick={toggleMobileMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 font-medium ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+919326357129"
                className="block mx-3 mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center font-medium"
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
