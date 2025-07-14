import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Student Portal", href: "/student-portal" },
    { name: "Staff Portal", href: "/staff-portal" },
    { name: "E-Learning", href: "/elearning" },
    { name: "Library", href: "/library" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Downloads", href: "/downloads" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">About AACOE</h3>
            <p className="text-gray-300">
              The Adamu Augie College of Education, Argungu is committed to excellence in teacher education and research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                <span className="text-gray-300">
                  Along Birnin Kebbi Road, Argungu, Kebbi State, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-emerald-400" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-400" />
                <span className="text-gray-300">info@aacoe-argungu.edu.ng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adamu Augie College of Education, Argungu. All Rights Reserved.</p>
          <div className="mt-2 text-sm">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <span className="mx-2">|</span>
            <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
          </div>
          <p className="mt-2 text-sm">POWERED BY SAMTEC ASSOCIATES CONSULTING ENGINEERS LIMITED</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
