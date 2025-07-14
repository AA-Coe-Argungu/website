"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaClock, FaEnvelope, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
      // Close mobile menu if clicked outside
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const hamburgerButton = document.querySelector('.mobile-menu-button');
        if (!hamburgerButton.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const dropdownItems = {
    about: [
      { name: "About AACOE Argungu", href: "/about" },
      { name: "College Management", href: "/management" },
      { name: "Governing Council", href: "/board" },
      { name: "Provost's Message", href: "/provost-message" },
      { name: "Registrar's Message", href: "/registrar-message" },
      { name: "Contact Us", href: "/contact" },
    ],
    academics: [
      { name: "Colleges", href: "/colleges" },
      { name: "Academic Staff", href: "/academic" },
      { name: "Academic Calendar", href: "/calendar" },
      { name: "Grading System", href: "/grading" },
    ],
    admissions: [
      { name: "Requirements", href: "/requirements" },
      { name: "How to Apply", href: "/how-to-apply" },
      { name: "Tuition Fees", href: "/fees" },
    ],
    resources: [
      { name: "Student Portal", href: "/student-portal" },
      { name: "Staff Portal", href: "/staff-portal" },
      { name: "Admission Portal", href: "/admission-portal" },
    ],
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top Contact/Social Bar - Hidden on mobile */}
      <div className="hidden md:block bg-emerald-100 text-gray-800 py-2 px-4 border-b border-emerald-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info - Left */}
          <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-1 text-sm">
              <FaEnvelope className="text-emerald-600" />
              <span>info@aacoe-argungu.edu.ng</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaPhoneAlt className="text-emerald-600" />
              <span>+234 123 456 7890</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaClock className="text-emerald-600" />
              <span>Mon-Fri: 8:00AM - 4:00PM</span>
            </div>
          </div>

          {/* Social Icons - Right */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-emerald-700 text-2xl font-bold">
            <Link href="/" className="hover:text-emerald-600 transition-colors flex items-center">
              <Image 
                src="/logo.jpeg"  
                alt="AACOE Argungu Logo" 
                width={50} 
                height={50}
                className="mr-2"
              />
              <span className="border-2 border-emerald-600 px-2 hidden sm:inline">AACOEA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" ref={dropdownRef}>
            <div className="flex flex-wrap justify-center gap-6">
              {/* About Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown("about")} 
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  About Us
                  <FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "about" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                    {dropdownItems.about.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
{/* About Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown("Academics")} 
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  Academics
                  <FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === "Academics" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "Academics" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                    {dropdownItems.academics.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
               {/* Admissions Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("admissions")}
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  Admissions
                  <FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === "admissions" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "admissions" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                    {dropdownItems.admissions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  Online Resources
                  <FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === "resources" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "resources" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                    {dropdownItems.resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/news" className="text-gray-700 hover:text-emerald-600 transition-colors">
                News
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Gallery
              </Link>
            </div>

            <Link
              href="/apply"
              className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-emerald-700 focus:outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden bg-white py-4 px-4 border-t border-gray-200"
            ref={mobileMenuRef}
          >
            <div className="flex flex-col space-y-4">
              {/* About Mobile Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 py-2"
                >
                  <span>About Us</span>
                  <FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "about" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {dropdownItems.about.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-emerald-600"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other mobile dropdowns... */}
              {/* (Repeat similar structure for Academics, Admissions, Resources) */}

              <Link 
                href="/news" 
                className="text-gray-700 hover:text-emerald-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-emerald-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}