import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">AACOE Argungu</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/academics" className="text-gray-300 hover:text-white">Academics</Link>
          <Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link>
          <Link href="/staff" className="text-gray-300 hover:text-white">Staff</Link>
          <Link href="/news" className="text-gray-300 hover:text-white">News</Link>
          <Link href="/gallery" className="text-gray-300 hover:text-white">Gallery</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
