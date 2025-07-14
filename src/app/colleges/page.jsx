"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaUserTie, FaPhone, FaEnvelope, FaBook, FaGraduationCap, FaFlask, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { colleges } from '@/data/colleges';
import PageHero from '@/components/PageHero';

const Colleges = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleDepartmentClick = (college, department) => {
    setSelectedCollege(college);
    setSelectedDepartment(department);
  };

  const handleBackToColleges = () => {
    setSelectedDepartment(null);
    setSelectedCollege(null);
  };

  if (selectedDepartment) {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Department Header */}
        <div className="relative h-48 bg-emerald-800 flex items-center">
          <div className="absolute inset-0">
            <Image 
              src={selectedDepartment.image} 
              alt={selectedDepartment.name}
              fill
              className="object-cover opacity-70"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <button 
              onClick={handleBackToColleges}
              className="flex items-center text-white mb-4 hover:underline"
            >
              <FaChevronLeft className="mr-2" />
              Back to Colleges
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {selectedDepartment.name}
            </h1>
            <p className="text-white mt-2">
              {selectedCollege.name} - {selectedCollege.acronym}
            </p>
          </div>
        </div>

        {/* Department Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Department Info */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Profile</h2>
              <p className="text-gray-600 mb-6">{selectedDepartment.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Programs Offered</h3>
                <ul className="space-y-3">
                  {selectedDepartment.programs.map((program, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* HOD Profile */}
            <div className="bg-white rounded-lg shadow-md p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUserTie className="text-emerald-600 mr-3" />
                Head of Department
              </h2>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-emerald-100">
                  <Image 
                    src={selectedDepartment.hod.image} 
                    alt={selectedDepartment.hod.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{selectedDepartment.hod.name}</h3>
                <p className="text-gray-600 mb-4">{selectedDepartment.hod.qualification}</p>
                
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-center text-gray-700">
                    <FaPhone className="text-emerald-600 mr-2" />
                    {selectedDepartment.hod.contact.phone}
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <FaEnvelope className="text-emerald-600 mr-2" />
                    {selectedDepartment.hod.contact.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <PageHero img={"/about-hero.jpg"} title="Our Colleges" description="Academic divisions of excellence" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Structure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AACOE Argungu is organized into specialized colleges, each focusing on distinct areas of teacher education.
          </p>
        </div>

        {/* Colleges List */}
        <div className="space-y-16">
          {colleges?.map((college, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {/* College Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image 
                    src={college.image} 
                    alt={college.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* College Details */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 mr-3">{college.name}</h2>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {college.acronym}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{college.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Departments:</h3>
                    <div className="flex flex-wrap gap-2">
                      {college.departments.map((dept, i) => (
                        <Link
                          key={dept.slug}
                          href={`/colleges/${college.slug}/${dept.slug}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition-colors"
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Dean's Profile */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <FaUserTie className="text-emerald-600 mr-2" />
                      Dean's Profile
                    </h3>
                    <div className="flex items-start">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-emerald-100">
                        <Image 
                          src={college.dean.image} 
                          alt={college.dean.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{college.dean.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{college.dean.qualification}</p>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <FaPhone className="text-emerald-600 mr-2" />
                          {college.dean.contact.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaEnvelope className="text-emerald-600 mr-2" />
                          {college.dean.contact.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">College Administration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                <FaBook className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Academic Policies</h3>
                <p className="text-gray-600">
                  Each college operates under the academic policies and guidelines of the National Commission for Colleges of Education.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Programs Offered</h3>
                <p className="text-gray-600">
                  Our colleges offer both NCE and degree programs in various fields of education.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full mr-4">
                <FaFlask className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Research Focus</h3>
                <p className="text-gray-600">
                  Each college has specialized research centers focusing on contemporary educational issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;