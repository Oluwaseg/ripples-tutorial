"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Music,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/assets";

const socialIcons = [
  { name: "Facebook", icon: <Facebook className="w-6 h-6" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="w-6 h-6" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="w-6 h-6" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, href: "#" },
  { name: "TikTok", icon: <Music className="w-6 h-6" />, href: "#" },
  { name: "X", icon: <X className="w-6 h-6" />, href: "#" },
];

const navigationItems = [
  {
    name: "ABOUT US",
    href: "/about",
  },
  {
    name: "BESPOKE PROGRAMMES",
    href: "/programmes",
    hasDropdown: true,
    dropdownItems: [
      { name: "One-on-One Tuition", href: "/programmes/one-on-one" },
      { name: "Self Tuition", href: "/programmes/self-tuition" },
      { name: "Group Based Tuition", href: "/programmes/group-based" },
    ],
  },
  {
    name: "ADMISSIONS",
    href: "/admissions",
    // hasDropdown: true,
    // dropdownItems: [
    //   { name: "How to Apply", href: "/admissions/apply" },
    //   { name: "Entry Requirements", href: "/admissions/requirements" },
    //   { name: "Fees & Scholarships", href: "/admissions/fees" },
    // ],
  },
  {
    name: "CONTACT US",
    href: "/contact",
    hasDropdown: false,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItem(expandedMobileItem === itemName ? null : itemName);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "lg:bg-transparent lg:backdrop-blur-none bg-white lg:shadow-none shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {!isScrolled ? (
          <>
            {/* DESKTOP - Non-scrolled */}
            <div className="hidden lg:flex items-center justify-between py-2">
              <Link href="/" className="flex items-center">
                <Image
                  src={assets.logo}
                  alt="RipplesXtorials"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {socialIcons.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-orange-500/20 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-2 ml-2">
                  <Button className="bg-orange-500 hover:bg-orange-600/50 text-white px-6 py-2.5 rounded font-bold text-sm tracking-wide">
                    GET STARTED
                  </Button>
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded font-bold text-sm tracking-wide">
                    DONATE
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE - Non-scrolled */}
            <div className="flex lg:hidden items-center justify-between py-2">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src={assets.logo}
                  alt="RipplesXtorials"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              {/* Mobile Actions - Button + Hamburger Menu */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 h-9 w-9 flex items-center justify-center flex-shrink-0"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isOpen && (
                <div className="fixed inset-0 top-13.5 bg-white z-50 shadow-xl transform transition-transform duration-300">
                  <div className="flex flex-col space-y-0 p-0">
                    <nav className="flex flex-col">
                      {navigationItems.map((item) => (
                        <div
                          key={item.name}
                          className="border-b border-gray-100"
                        >
                          <div className="flex items-center justify-between p-4">
                            <Link
                              href={item.href}
                              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors uppercase tracking-wide flex-1"
                              onClick={() =>
                                !item.hasDropdown && setIsOpen(false)
                              }
                            >
                              {item.name}
                            </Link>
                            {item.hasDropdown && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleMobileItem(item.name)}
                                className="text-gray-400 hover:text-gray-600 ml-2"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    expandedMobileItem === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </Button>
                            )}
                          </div>
                          {item.hasDropdown &&
                            item.dropdownItems &&
                            expandedMobileItem === item.name && (
                              <div className="bg-gray-50 border-t border-gray-100">
                                {item.dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block px-6 py-3 text-xs text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors uppercase tracking-wide"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </div>

            {/* DESKTOP - Navigation Menu */}
            <div className="hidden lg:block">
              <nav className="flex items-center justify-end py-3">
                <div className="flex items-center space-x-4">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <button className="flex items-center gap-1 text-white font-semibold text-sm tracking-wide transition-colors uppercase">
                            {item.name}
                            <ChevronDown className="h-3 w-3" />
                          </button>
                          {hoveredItem === item.name && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors first:rounded-t-md last:rounded-b-md"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-white hover:text-gray-200 font-semibold text-sm tracking-wide transition-colors uppercase"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </>
        ) : (
          <>
            {/* DESKTOP - Scrolled */}
            <div className="hidden lg:flex items-center justify-between py-3">
              <Link href="/" className="flex items-center">
                <Image
                  src={assets.logo}
                  alt="RipplesXtorials"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center">
                <nav className="flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors uppercase">
                            {item.name}
                            <ChevronDown className="h-3 w-3" />
                          </button>
                          {hoveredItem === item.name && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors first:rounded-t-md last:rounded-b-md"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors uppercase"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* MOBILE - Scrolled */}
            <div className="flex lg:hidden items-center justify-between py-3">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src={assets.logo}
                  alt="RipplesXtorials"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              {/* Mobile Actions - Button + Hamburger Menu */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:bg-gray-100 h-9 w-9 flex items-center justify-center flex-shrink-0"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isOpen && (
                <div className="fixed inset-0 top-16 bg-white z-50 shadow-xl transform transition-transform duration-300">
                  <div className="flex flex-col space-y-0 p-0">
                    <nav className="flex flex-col">
                      {navigationItems.map((item) => (
                        <div
                          key={item.name}
                          className="border-b border-gray-100"
                        >
                          <div className="flex items-center justify-between p-4">
                            <Link
                              href={item.href}
                              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors uppercase tracking-wide flex-1"
                              onClick={() =>
                                !item.hasDropdown && setIsOpen(false)
                              }
                            >
                              {item.name}
                            </Link>
                            {item.hasDropdown && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleMobileItem(item.name)}
                                className="text-gray-400 hover:text-gray-600 ml-2"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    expandedMobileItem === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </Button>
                            )}
                          </div>
                          {item.hasDropdown &&
                            item.dropdownItems &&
                            expandedMobileItem === item.name && (
                              <div className="bg-gray-50 border-t border-gray-100">
                                {item.dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block px-6 py-3 text-xs text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors uppercase tracking-wide"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
