"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { usePathname } from "next/navigation";
import { assets } from "@/assets";

const socialIcons = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { name: "TikTok", icon: <Music className="w-5 h-5" />, href: "#" },
  { name: "X", icon: <X className="w-5 h-5" />, href: "#" },
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
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  );
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const shouldBeTransparent = isHomePage && !isScrolled;

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const textColorClass = shouldBeTransparent ? "text-white" : "text-gray-700";
  const hoverTextColorClass = shouldBeTransparent
    ? "hover:text-accent"
    : "hover:text-accent";

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? "lg:bg-transparent lg:backdrop-blur-none bg-white lg:shadow-none shadow-sm"
          : "bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        {shouldBeTransparent ? (
          <>
            {/* DESKTOP - Transparent (Homepage, Not Scrolled) */}
            <div className="hidden lg:flex items-center justify-between py-2">
              <Link href="/" className="flex items-center">
                <Image
                  src={assets.logo || "/placeholder.svg"}
                  alt="RipplesXtorials"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {socialIcons.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 border border-white/20 hover:border-accent"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-2 ml-2">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-lg hover:shadow-accent/50 transition-all duration-300">
                    GET STARTED
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide shadow-lg hover:shadow-primary/50 transition-all duration-300">
                    DONATE
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE - Transparent (Homepage, Not Scrolled) */}
            <div className="flex lg:hidden items-center justify-between py-2">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src={assets.logo || "/placeholder.svg"}
                  alt="RipplesXtorials"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 h-12 w-12 flex items-center justify-center flex-shrink-0 text-white"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-8 w-8 text-primary animate-spin duration-300" />
                  ) : (
                    <Menu className="h-8 w-8 text-accent animate-pulse duration-700" />
                  )}
                </Button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isOpen && (
                <div className="fixed inset-0 top-[3.375rem] bg-white z-50 shadow-xl transform transition-transform duration-300">
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
                              className={`text-sm font-medium transition-colors uppercase tracking-wide flex-1 ${
                                isActive(item.href)
                                  ? "text-accent font-bold"
                                  : "text-gray-700 hover:text-accent"
                              }`}
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
                                className="text-gray-400 hover:text-accent ml-2"
                                aria-label={`Toggle ${item.name} submenu`}
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
                                    className={`block px-6 py-3 text-xs transition-colors uppercase tracking-wide ${
                                      isActive(dropdownItem.href)
                                        ? "text-accent font-bold bg-accent/10"
                                        : "text-gray-600 hover:text-accent hover:bg-gray-100"
                                    }`}
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

            {/* DESKTOP - Navigation Menu (Transparent) */}
            <div className="hidden lg:block">
              <nav className="flex items-center justify-end py-3">
                <div className="flex items-center space-x-6">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              className={`flex items-center gap-1 font-semibold text-sm tracking-wide transition-colors uppercase relative pb-1 ${
                                isActive(item.href)
                                  ? "text-accent"
                                  : "text-white hover:text-accent"
                              }`}
                            >
                              {item.name}
                              <ChevronDown className="h-3 w-3" />
                              {isActive(item.href) && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                              )}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-white">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <DropdownMenuItem key={dropdownItem.name} asChild>
                                <Link
                                  href={dropdownItem.href}
                                  className={`w-full cursor-pointer ${
                                    isActive(dropdownItem.href)
                                      ? "text-accent font-semibold bg-accent/10"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={item.href}
                          className={`font-semibold text-sm tracking-wide transition-colors uppercase relative pb-1 inline-block ${
                            isActive(item.href)
                              ? "text-accent"
                              : "text-white hover:text-accent"
                          }`}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                          )}
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
            {/* DESKTOP - White Background (Other Pages or Scrolled) */}
            <div className="hidden lg:flex items-center justify-between py-3">
              <Link href="/" className="flex items-center">
                <Image
                  src={assets.logo || "/placeholder.svg"}
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              className={`flex items-center gap-1 font-semibold text-sm tracking-wide transition-colors uppercase relative pb-1 ${
                                isActive(item.href)
                                  ? "text-accent"
                                  : "text-gray-700 hover:text-accent"
                              }`}
                            >
                              {item.name}
                              <ChevronDown className="h-3 w-3" />
                              {isActive(item.href) && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                              )}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-white">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <DropdownMenuItem key={dropdownItem.name} asChild>
                                <Link
                                  href={dropdownItem.href}
                                  className={`w-full cursor-pointer ${
                                    isActive(dropdownItem.href)
                                      ? "text-accent font-semibold bg-accent/10"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={item.href}
                          className={`font-semibold text-sm tracking-wide transition-colors uppercase relative pb-1 inline-block ${
                            isActive(item.href)
                              ? "text-accent"
                              : "text-gray-700 hover:text-accent"
                          }`}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                          )}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* MOBILE - White Background (Other Pages or Scrolled) */}
            <div className="flex lg:hidden items-center justify-between py-3">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src={assets.logo || "/placeholder.svg"}
                  alt="RipplesXtorials"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:bg-gray-100 h-9 w-9 flex items-center justify-center flex-shrink-0"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-5 w-5 text-primary" />
                  ) : (
                    <Menu className="h-8 w-8 text-accent" />
                  )}
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
                              className={`text-sm font-medium transition-colors uppercase tracking-wide flex-1 ${
                                isActive(item.href)
                                  ? "text-accent font-bold"
                                  : "text-gray-700 hover:text-accent"
                              }`}
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
                                className="text-gray-400 hover:text-accent ml-2"
                                aria-label={`Toggle ${item.name} submenu`}
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
                                    className={`block px-6 py-3 text-xs transition-colors uppercase tracking-wide ${
                                      isActive(dropdownItem.href)
                                        ? "text-accent font-bold bg-accent/10"
                                        : "text-gray-600 hover:text-accent hover:bg-gray-100"
                                    }`}
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
