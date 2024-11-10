import { useState, useEffect } from "react";
import { Link, useLocation } from "@remix-run/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useClickOutside } from "../hooks/useClickOutside";

const navItems = [
  { name: "Home", href: "/clemson" },
  { name: "Bucket List", href: "/bucketlist" },
  { name: "Fun Places", href: "/funplaces" },
  { name: "Hiking", href: "/hiking" },
  { name: "Outdoors", href: "/outdoors" },
  { name: "Attractions", href: "/attractions" },
  { name: "Disc Golf", href: "/clemson-disc-golf" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const ref = useClickOutside(() => setIsOpen(false));

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isCurrentRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img
                  src="/data-matt-logo.svg"
                  alt="Data Matt Logo"
                  className="w-10 h-10"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:ml-6 md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 transition-colors ${
                    isCurrentRoute(item.href)
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isOpen ? (
                <IconX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <IconMenu2 className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-200 ease-in-out absolute w-full bg-gray-800 shadow-lg z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isCurrentRoute(item.href)
                  ? "bg-gray-900 text-white font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
