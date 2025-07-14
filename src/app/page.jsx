"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaBookOpen, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HomePage = () => {
  // Section 1: Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Quality Teacher Education",
      description: "Join our NCE programs to become a certified professional teacher with practical teaching experience.",
      cta: "Apply for NCE",
      image: "/slider1.jpg",
      link: "/nce-admissions",
    },
    {
      title: "Undergraduate Degrees",
      description: "Our B.Ed programs are accredited to produce highly qualified graduates for the education sector.",
      cta: "Apply for B.Ed",
      image: "/slider2.jpg",
      link: "/ug-admissions",
    },
    {
      title: "Modern Facilities",
      description: "Learn in our well-equipped classrooms, laboratories, and digital resource center.",
      image: "/slider3.jpg",
      link: "/facilities",
    },
    {
      title: "Experienced Lecturers",
      description: "Learn from seasoned academics and industry professionals.",
      image: "/slider4.jpg",
      link: "/staff",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Section 3: Featured Courses
  const courses = [
    { title: "B.Ed Education & Biology", duration: "4 Years", type: "Undergraduate" },
    { title: "NCE Primary Education", duration: "3 Years", type: "NCE" },
    { title: "B.Ed Education & Mathematics", duration: "4 Years", type: "Undergraduate" },
    { title: "NCE Early Childhood Care", duration: "3 Years", type: "NCE" },
  ];

  // Section 5: Alumni
  const alumni = {
    name: "Amina Mohammed",
    position: "Head Teacher, Kebbi State Primary School",
    testimonial: "The quality education I received at AACOE Argungu prepared me exceptionally well for my teaching career.",
    image: "/alumni.jpg",
  };

  // Section 6: News & Events
  const news = [
    { title: "2024/2025 Admission List Released", date: "May 15, 2024", link: "/news/admission-list" },
    { title: "Annual Education Conference", date: "June 20, 2024", link: "/events/conference" },
    { title: "New Computer Lab Commissioned", date: "April 5, 2024", link: "/news/computer-lab" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Section 1: Hero Slider (not full page) */}
      <section className="relative h-96 md:h-screen max-h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            {/* Background Image - now properly layered */}
            <div className="absolute inset-0">
              <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
            </div>

            {/* Semi-transparent overlay - separate from content */}
            <div className="absolute inset-0 " style={{ background: "rgba(0, 0, 0, 0.5)" }}></div>

            {/* Content container - positioned above overlay */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-6 max-w-2xl">{slide.description}</p>
                {slide.cta && (
                  <Link href={slide.link} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded inline-block">
                    {slide.cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </section>

      {/* Section 2: About (full page) */}
      <section className="min-h-screen flex items-center bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64">
              <Image src="/logo.jpeg" alt="AACOE Argungu Logo" fill className="object-contain" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About AACOE Argungu</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              Adamu Augie College of Education, Argungu is a premier teacher training institution established to produce qualified teachers for
              primary and secondary schools in Nigeria.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-600">
              We offer both NCE and undergraduate degree programs in various fields of education, with a focus on practical teaching skills and modern
              pedagogical approaches.
            </p>
            <Link href="/about" className="text-emerald-600 font-semibold hover:underline inline-flex items-center text-lg">
              Learn more about us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Courses (full page) */}
      <section className="min-h-screen flex items-center bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="p-6 h-full flex flex-col">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                      course.type === "Undergraduate" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {course.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                  <div className="mt-auto">
                    <Link href="/courses" className="text-emerald-600 font-semibold hover:underline inline-flex items-center">
                      View details <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg inline-block transition-all hover:scale-105"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Stats (full page) */}
      <section className="min-h-screen flex items-center bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <FaUserGraduate className="text-4xl md:text-5xl mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-lg md:text-xl">Students</div>
            </div>
            <div className="p-6">
              <FaChalkboardTeacher className="text-4xl md:text-5xl mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg md:text-xl">Lecturers</div>
            </div>
            <div className="p-6">
              <FaUniversity className="text-4xl md:text-5xl mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-lg md:text-xl">Schools</div>
            </div>
            <div className="p-6">
              <FaBookOpen className="text-4xl md:text-5xl mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg md:text-xl">Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Alumni (full page) */}
      <section className="min-h-screen flex items-center bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Distinguished Alumni</h2>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
            {/* Image Container - Fixed */}
            <div className="md:w-1/3 h-96 md:h-[500px] w-full relative">
              <Image src={alumni.image} alt={alumni.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" priority />
            </div>

            {/* Content Container */}
            <div className="md:w-2/3 p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-700">"{alumni.testimonial}"</blockquote>
              <div className="text-emerald-700 font-bold text-lg md:text-xl">{alumni.name}</div>
              <div className="text-emerald-600 mb-6 md:text-lg">{alumni.position}</div>
              <Link href="/alumni" className="text-emerald-600 font-semibold hover:underline inline-flex items-center text-lg">
                More success stories <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: News & Events (full page) */}
      <section className="min-h-screen flex items-center bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="p-6 h-full flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <div className="mt-auto">
                    <Link href={item.link} className="text-emerald-600 font-semibold hover:underline inline-flex items-center">
                      Read more <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/news"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg inline-block transition-all hover:scale-105"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
